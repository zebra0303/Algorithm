const log = console.log;
const txtTri = `3
7 4
2 4 6
8 5 9 3`;

let max = 0;
const arrRow = txtTri.split(/\r?\n/);
const lenArrRow = arrRow.length;

const arrNum = arrRow[lenArrRow - 1].split(' ');
const lenArrNum = arrNum.length;

for(let i=0; i < lenArrNum; i++) {
  const num = parseInt(arrNum[i], 10);
  findMaxSum(lenArrRow-1, i, num);
}
log('max: ' + max);

function findMaxSum(idxRow, idxNum, sum) {
  log(idxRow, idxNum, sum);

  if(sum > max) {
    max = sum;
  }

  if(idxRow > 0) {
    if(idxNum > 0) {
      log('L:::', idxNum, idxRow, arrRow[idxRow - 1][idxNum-1], sum);
      const sumLeft = sum + parseInt(arrRow[idxRow - 1][idxNum-1], 10);
      findMaxSum(idxRow-1, idxNum-1, sumLeft);
    }

    if(idxNum < arrRow[idxRow].length - 1) {
      log('R:::', idxNum, idxRow, arrRow[idxRow - 1][idxNum], sum);
      const sumRight = sum + parseInt(arrRow[idxRow - 1][idxNum], 10);
      findMaxSum(idxRow-1, idxNum, sumRight);
    }
  }
}

