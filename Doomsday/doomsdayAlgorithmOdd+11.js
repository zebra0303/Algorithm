// https://arxiv.org/ftp/arxiv/papers/1010/1010.0765.pdf 암산으로 계산하기 쉬운 공식

const log = console.log;
const arrWeekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const arrAnchorday = [2, 0, 5, 3]; // 엥커데이 년도 앞2자리를 4로 나누면 나머지의 요일값 '화(2), 일(0), 금(5), 수(3)'가 계속 반 복됨

const strYear = (new Date()).getFullYear() + ''; // 올해 년도 값
// 년도 뒤 2자리 숫자와 그 외 앞자리 숫자를 구분
const [, strYearFront, strYearEnd] = strYear.split(/^(\d+)(\d{2})$/);

let numWeek = parseInt(strYearEnd, 10);

const chkOdd = (num) => {
  if (num%2 !== 0) {
    num += 11;
  }
  return num;
};

// 1. 년도 뒤 2자리를 제외한 앞자리의 엥커데이 (400년 마다 순환됨)
const numAnchorday = arrAnchorday[parseInt(strYearFront, 10)%4];
// 2. 년도수 끝 2자리가 홀수라면 11을 더한다
numWeek = chkOdd(numWeek);
// 3. 위에서 구한 값을 2로 나눈다
numWeek /= 2;
// 4. 위에서 나눈 값이 홀수면 11을 더한다
numWeek = chkOdd(numWeek);
// 5. 위에서 구한 값을 7로 나눈 나머지의 7의 보수를 구한다
numWeek = 7 - numWeek%7;
// 6. 엥커데이와 7의보수를 더한값의 7로 나눈 나머지가 둠스데이!!!
const doomsday = arrWeekday[(numAnchorday + numWeek)%7];

//log(numWeek, numAnchorday, doomsday);
log(`${strYear}'s doomsday is ${doomsday}!!!`);
