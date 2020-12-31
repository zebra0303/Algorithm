const log = console.log;
const max = 1000;

function getSum(digit) {
  const cnt = (max%digit === 0) ? max/digit - 1 : Math.floor(max/digit);
  // formula of the sum of arithmetic series
  return digit*(cnt*(cnt + 1)/2);
}

const ans = getSum(3) + getSum(5) - getSum(3*5);
log(ans);