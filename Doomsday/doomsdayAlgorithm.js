const log = console.log;
const arrWeekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const arrAnchorday = [2, 0, 5, 3]; // 엥커데이 년도 앞2자리를 4로 나누면 나머지의 요일값 '화(2), 일(0), 금(5), 수(3)'가 계속 반 복됨

const strYear = (new Date()).getFullYear() + ''; // 올해 년도 값
// 년도 뒤 2자리 숫자와 그 외 앞자리 숫자를 구분
const [, strYearFront, strYearEnd] = strYear.split(/^(\d+)(\d{2})$/);
const numYearFront = parseInt(strYearFront, 10);
const numYearEnd = parseInt(strYearEnd, 10);

// 1. 년도 뒤 2자리를 제외한 앞자리의 엥커데이 (400년 마다 순환됨)
const numAnchorday = arrAnchorday[numYearFront%4];
// 2. 년도 뒷자리 2 숫자를 12로 나눈 몫 : 12년 마다 하루씩 증가
const numQuotient = Math.floor(numYearEnd/12);
// 3. 년도 뒷자리 2 숫자를 12로 나눈 나머지 : 매년 하루씩 증가
const numRemainder = numYearEnd%12;
// 4. 위 나머지를 4로 나눈 값 : 4년마다 윤년이 있음
const numQuotient4Remainder = Math.floor(numRemainder/4);
// 5. 위에서 구한 모든 값을 더한뒤 7로 나눈 나머지가 둠스 데이!!!
const doomsday = arrWeekday[(numQuotient + numRemainder + numQuotient4Remainder + numAnchorday)%7];

//log(strYearFront, strYearEnd, numQuotient, numRemainder, numQuotient4Remainder, numAnchorday, doomsday);
log(`${strYear}'s doomsday is ${doomsday}!!!`);
