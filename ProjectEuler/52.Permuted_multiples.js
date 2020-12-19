const log = console.log;

function getSorted(num) {
  const strNum = num + '';

  return strNum.split('').sort().join('');
}

function chkNum(num) {
  let cntPass = 0;
  const strNum = getSorted(num);
  const arrMultiplyNum = [2, 3, 4, 5, 6];
  for (const mNum of arrMultiplyNum) {
    if (strNum === getSorted(num * mNum)) {
      cntPass++;
    } else {
      break;
    }
  }

  return cntPass === arrMultiplyNum.length;
}

let num = 1;
while (!chkNum(num)) {
  num++;
}

log(`The answer is ${num}`);