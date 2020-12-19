const log = console.log;
let cntMax = 0;
const chkObj = {};
let num = 1;
let ans;

while (cntMax < 5) {
  num++;
  const numCubic = Math.pow(num, 3);
  const sortedKey = (numCubic + '').split('').sort().join('');

  if (typeof chkObj[sortedKey] === "undefined") {
    chkObj[sortedKey] = { min: numCubic, count: 1 };
  } else {
    chkObj[sortedKey].count++;
  }

  if (chkObj[sortedKey].count > cntMax) {
    cntMax = chkObj[sortedKey].count;
    if (cntMax === 5) {
      ans = chkObj[sortedKey].min;
    }
  }
}

log(ans);
