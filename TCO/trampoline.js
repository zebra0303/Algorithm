const log = console.log;
console.time('TCO');
function trampoline(func) {
  return function trampolined(...args) {
    let result = func.bind(null, ...args);

    while (typeof result === 'function') result = result();

    return result;
  }
}


const factorial = trampoline(function _factorial(num, acc = 1) {
  if (num <= 1) return acc;
  return () => _factorial(num - 1, num * acc)
});

log(factorial(99));
//log(factorial(100000));
console.timeEnd('TCO');
//log(factorial(100000));

// reference : https://bit.ly/3NGwLPM
