const log = console.log;

/**
 * 추측 가능한 비밀번호 사용 제어
 * - 동일 혹은 인접 문자 3자 이상 반복
 */
function kin4(newPassword: string) {
  const buff = ['0123456789', 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
  const max = 3;

  let src; let src2;
  let ptn: string = '';
  for (let i = 0; i < buff.length; i++) {
    src = buff[i]; // 0123456789
    src2 = buff[i] + buff[i]; // 01234567890123456789
    for (let j = 0; j < src.length; j++) {
      const x = src.substr(j, 1); // 0
      const y = src2.substr(j, max); // 0123
      ptn += `[${x}]{${max},}|`; // [0]{4,}|0123|[1]{4,}|1234|...
      ptn += `${y}|`;
    }
  }
  return new RegExp(ptn.replace(/.$/, '')).test(newPassword);
}

console.time("newFunc");
log(kin4('11a3AAa#aa$$$aa33')); // false
log(kin4('1123AAa#aa$$$aa33')); // true
console.timeLog("newFunc");
console.timeEnd("newFunc");

