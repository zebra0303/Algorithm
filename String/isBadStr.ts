/**
 * 
 * @param {string} input - 입력 텍스트값
 * @param {number} max - 반복 또는 연속적인 문자 길이 
 * @returns {boolean} - 같은 영문 또는 숫자 문자가 max 길이만큼 반복으로 들어가 있으면 false 그렇지 않으면 true
 * 
 */
const isBadStr = (input: string, max: number = 3): boolean => {
  const lenInput = input.length;
  // 입력값 체킹
  if (lenInput === 0 || max <= 0) {
    throw new RangeError(`\n[입력값을 체킹해 주세요]\n* input: '${input}', max: ${max}\n\n`);
  }

  // 영문 숫자외 문자인지 체킹 로직
  const isSpecialChar = (char: string) => char.match(/[^0-9a-z]/i) !== null;

  interface ChkData {
    idx: number;
    charCode: number;
    scoreSame: number;
    scoreSeq: number;
  };

  // 특수문자나 조건에 맞지않을시 점수 리셋
  const initChkData = (idx: number): ChkData => {
    while (idx < lenInput && isSpecialChar(input[idx])) {
      idx++;
    }

    return {
      idx,
      charCode: input.charCodeAt(idx),
      scoreSame: 1,
      scoreSeq: 1,
    };
  };

  // 첫 문자로 초기 비교 데이타 준비 
  let chkData: ChkData = initChkData(0);

  for (let idx = chkData.idx + 1; idx < lenInput; idx++) {
    let chkChar = input[idx];

    if (isSpecialChar(chkChar)) {
      idx++;
      if (idx < lenInput) {
        chkData = initChkData(idx);
      }
    } else {
      const chkCharCode = chkChar.charCodeAt(0);
      // 앞문자와 같은 문자인지
      const isSameCharCode = chkData.charCode === chkCharCode;
      // 앞문자와 연속적인 문자인지
      const isSequential = chkData.charCode + 1 === chkCharCode;

      if (!isSameCharCode && !isSequential) {
        chkData = initChkData(idx);
      } else {
        if (isSameCharCode) {
          chkData.scoreSame++;
        } else if (isSequential) {
          chkData.scoreSeq++;
        }

        // 다음 체킹을 위해서 현재 데이타 업데이트
        chkData.idx = idx;
        chkData.charCode = chkCharCode;
      }
    }

    // 조건(연속적이거나 같은문자가 max개 일때) 위배시 false 리턴 
    if (chkData.scoreSame === max || chkData.scoreSeq === max) {
      return true;
    }
  }

  return false;
};

console.time("newFunc");
console.log(isBadStr('11a3AAa#aa$$$aa33', 3)); // false
console.log(isBadStr('1123AAa#aa$$$aa33', 3)); // true
console.timeLog("newFunc");
console.timeEnd("newFunc");