class Promise {
  #arrOnFulfilled = [];
  #arrOnRejected = [];
  #arrOnFinally = [];

  constructor(executor) {
    if (typeof executor !== 'function') {
      throw TypeError(`TypeError: Promise resolver ${executor} is not a function`);
    }

    this.state = 'pending';
    this.result;

    const resolve = (value) => {
      this.state = 'fulfilled';
      this.result = value;

      this.#arrOnFulfilled.forEach((func, idx) => {
        const promiseOrValue = func(this.result);

        if (promiseOrValue instanceof Promise) {
          // 등록된 함수가 Promise인 경우 그 뒤 함수를 빼서 콜백으로 전달
          promiseOrValue.then(...this.#arrOnFulfilled.splice(idx + 1, 1));
        } else {
          this.result = promiseOrValue;
        }
      });

      this.#arrOnFinally.forEach((func) => {
        func();
      });
    };

    const reject = (error) => {
      this.state = 'rejected';
      this.result = error;

      this.#arrOnRejected.forEach((func, idx) => {
        const promiseOrValue = func(this.result);

        if (promiseOrValue instanceof Promise) {
          // 등록된 함수가 Promise인 경우 그 뒤 함수를 빼서 콜백으로 전달
          promiseOrValue.catch(...this.#arrOnRejected.splice(idx + 1, 1));
        } else {
          this.result = promiseOrValue;
        }
      });

      this.#arrOnFinally.forEach((func) => {
        func();
      });
    };

    executor(resolve, reject);
  }

  then(func) {
    if (this.state === 'pending') {
      this.#arrOnFulfilled.push(func);
    } else if (this.state === 'fulfilled') {
      if (this.result instanceof Promise) {
        const promise = this.result;
        if (promise.state === 'pending') {
          return promise.then(func);
        } else {
          this.result = func(promise.result);
        }
      } else {
        this.result = func(this.result);
      }
    }

    return this;
  }

  catch (func) {
    if (this.state === 'pending') {
      this.#arrOnRejected.push(func);
    } else if (this.state === 'rejected') {
      if (this.result instanceof Promise) {
        const promise = this.result;
        if (promise.state === 'pending') {
          return promise.catch(func);
        } else {
          this.result = func(promise.result);
        }
      } else {
        this.result = func(this.result);
      }
    }

    return this;
  }

  finally(func) {
    if (this.state === 'pending') {
      this.#arrOnFinally.push(func);
    } else {
      func();
    }

    return this;
  }

  static resolve(value) {
    return new Promise((resolve, reject) => {
      resolve(value);
    });
  }

  static reject(error) {
    return new Promise((resolve, reject) => {
      reject(error);
    });
  }

  static all(iterable) {
    // iterable 타입 체킹 및 크기가 0일때 처리
    if (typeof iterable[Symbol.iterator] !== 'function') {
      throw new TypeError(`${typeof iterable} ${iterable} is not iterable (cannot read property Symbol(Symbol.iterator))`);
    } else if (iterable.length === 0) {
      return Promise.resolve([]);
    }

    return new Promise((resolve, reject) => {
      // iterable이 배열이 아닐때 배열로 변환
      if (!iterable.forEach) {
        iterable = Array.from(iterable);
      }

      let pendingCount = iterable.length;
      const results = [];

      iterable.forEach((promise, idx) => {
        if (promise instanceof Promise) {
          promise.then((value) => {
            results.push(value);
            pendingCount--;

            if (pendingCount === 0) {
              resolve(results);
            }
          }).catch((error) => {
            reject(error);
          });
        } else {
          results.push(promise);
          pendingCount--;

          if (pendingCount === 0) {
            resolve(results);
          }
        }
      })
    });
  }
}
