const log = console.log;

const mulifyMatrix = (a, b) => {
  return a.map((val, idx) => {
    return [val[0]*b[0][0] + val[1]*b[0][1], 
    val[0]*b[1][0] + val[1]*b[1][1]]; 
  });
};

const fibo = (num) => {
  if (num === 0) {
    return num;
  } 

  const bNum = (num-1).toString(2).split('').reverse().join('');
  const bLen = bNum.length;
  let mBase = [[1, 1], [1, 0]];
  let mAns = [[1, 0], [0, 1]];

  for (let i=0; i < bLen; i++) {
    if (bNum[i] !== '0') {
      mAns = mulifyMatrix(mAns, mBase);
    }

    if (i < bLen - 1) {
      mBase = mulifyMatrix(mBase, mBase);
    }
  }
  
  return mAns[1][0] + mAns[1][1];
};
//log(fibo(2));
log(fibo(1474));
