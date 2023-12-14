const log = console.log;

// from 부터 to까지의 소수 갯수 구하기 : 에라토스테네스의 채 구현
function solution(from, to) {
  let isPrime = new Array(to - from + 1).fill(true);
  if (from === 1) {
    isPrime[0] = false;
  }

  let numSqrt = Math.floor(Math.sqrt(to));
  for (let i = 2; i <= numSqrt; i++) {
    let min_value = Math.floor((from + i - 1) / i) * i;
    for (let j = min_value; j <= to; j += i) {
      if (j === i) {
        continue;
      }
      isPrime[j - from] = false;
    }
  }
  let answer = 0;
  for (let i = 0; i < to - from + 1; i++) {
    if (isPrime[i] === true) {
      answer += 1;
    }
  }

  return answer;
}

//log(solution(5, 100)); // 23
log(solution(999999500000, 1000000000000)); // 18228
