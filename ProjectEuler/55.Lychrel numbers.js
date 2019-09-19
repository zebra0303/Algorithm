const log = console.log;
const maxNum = 10000;
const maxChkCnt = 50;
const objCheck = {
  1: 1,
  2: 1,
  3: 1,
  4: 1
};
let ans = 0;

const reverse = num => {
  return (num + "")
    .split("")
    .reverse()
    .join("");
};

const isPalindrome = num => {
  /*
  let rtnVal = false;
  const strNum = num + "";
  const lenNum = strNum.length;
  const chkCnt = Math.floor(lenNum / 2);
  const midIdx = lenNum % 2 === 0 ? chkCnt : chkCnt + 1;

  if (strNum.substr(0, chkCnt) === reverse(strNum.substr(midIdx, chkCnt))) {
    rtnVal = true;
  }

  return rtnVal;
  */
  return num === parseInt(reverse(num), 10);
};

const isLychrelNumber = (num, checkCount = 1) => {
  const numPlus = num + parseInt(reverse(num), 10);

  if (objCheck.hasOwnProperty(numPlus)) {
    return false;
  }

  if (isPalindrome(numPlus)) {
    objCheck[num] = checkCount;

    return false;
  } else if (checkCount === maxChkCnt) {
    return true;
  } else {
    return isLychrelNumber(numPlus, checkCount + 1);
  }
};

for (let i = 5; i <= maxNum; i++) {
  if (isLychrelNumber(i)) {
    ans++;
  }
}

log(ans);
