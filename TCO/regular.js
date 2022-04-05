const log = console.log;
console.time('NotTCO');
const factorial = (num) => {
  if (num <= 1) return 1;
  return num*factorial(num-1);
};

// log(factorial(99));
log(factorial(100000));
console.timeEnd('NotTCO');

