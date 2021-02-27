const log = console.log;
const maxNum = 60;
let maxX = 0;
let ans = 0;
console.time('time');

function getContinuedFractionNumer(numIR, prevUpperNum, prevDownNum) {
  const numIntPart = Math.floor(numIR);
  const upperNum = numIntPart**2 + numIR**2;
  const downNum = 2*numIntPart;
  log(upperNum, downNum);
}

const chkNum = Math.pow(7, 0.5);
log(getContinuedFractionNumer(chkNum, ''));

console.timeEnd('time');
log(maxX, ans);
