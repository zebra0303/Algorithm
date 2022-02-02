class Promise {
  #arrOnFulfilled = [];
  #arrOnRejected = [];
  #arrOnFinally = [];

  constructor(executor) {
    if (typeof executor !== 'function') {
      throw TypeError(`Promise resolver ${executor} is not a function`);
    }

    this.state = 'pending';
    this.result;

    const libResolveReject = (state, value, arrStateFunc, arrFinalFunc) => {
      this.state = state;
      this.result = value;
      arrStateFunc.forEach((func, idx) => {
        const promiseOrValue = func(this.result);

        if (promiseOrValue instanceof Promise) {
          // 등록된 함수가 Promise인 경우 그 뒤 함수를 빼서 콜백으로 전달
          promiseOrValue.then(...arrStateFunc.splice(idx + 1, 1));
        } else {
          this.result = promiseOrValue;
        }
      });

      arrFinalFunc.forEach((func) => {
        func();
      });
    };

    const resolve = (value) => {
      libResolveReject('fulfilled', value, this.#arrOnFulfilled, this.#arrOnFinally);
    };

    const reject = (error) => {
      libResolveReject('rejected', error, this.#arrOnRejected, this.#arrOnFinally);
    };

    executor(resolve, reject);
  }

  #libThenCatch = (state, func, arrStateFunc) => {
    if (this.state === 'pending') {
      arrStateFunc.push(func);
    } else if (this.state === state) {
      if (this.result instanceof Promise) {
        const promise = this.result;
        if (promise.state === 'pending') {
          return state ==='fulfilled' ? promise.then(func) : promise.catch(func);
        } else {
          this.result = func(promise.result);
        }
      } else {
        this.result = func(this.result);
      }
    }
  };

  then(func) {
    this.#libThenCatch('fulfilled', func, this.#arrOnFulfilled);
    return this;
  }

  catch(func) {
    this.#libThenCatch('rejected', func, this.#arrOnRejected);
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
