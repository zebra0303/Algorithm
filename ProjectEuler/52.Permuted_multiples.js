const log = console.log;

function getSorted(num) {
  const strNum = num + '';
  return strNum.split('').sort().join('');
}

function chkNum(num) {
  const originNum = num;
  let cntPass = 0;
  const arrMultiplyNum = [2, 3, 4, 5, 6];
  const strOriginNum = getSorted(originNum);
  for(const mNum of arrMultiplyNum) {
    if(strOriginNum === getSorted(originNum*mNum)) {
      cntPass++;
    }
  }

  return (cntPass === arrMultiplyNum.length) ? true : false;
}

let num = 1;
while(!chkNum(num)) {
  num++;
}
log(num);