const log = console.log;

// 정수 x의 각 자리수의 곱을 f(x)라고 할때 양의 정수 N과 B가 주어짐
// 1이상 N이하의 정수 m중에서 m-f(m) = B인것의 갯수를 구하시오 (N, B < Math.pow(10, 11))

function product(num) {
  if (num === 0) {
    return 0;
  }

  let prod = 1;
  while (num >= 1) {
    prod *= num % 10;
    num = Math.floor(num / 10);
  }

  return prod;
}

function func(digit, num) {
  if (digit === 11) {
    //log(`digit: ${digit}, num: ${num}, pd: ${product(num)}`);
    return new Set([product(num)]);
  }

  const candSet = new Set();
  const minVal = num % 10;

  for (let i = minVal; i < 10; i++) {
    //log(`digit: ${digit + 1}, num: ${num * 10 + i}`);
    const tmpSet = func(digit + 1, num * 10 + i);
    //log(tmpSet, digit, i);
    for (const val of tmpSet) {
      candSet.add(val);
    }
  }

  return candSet;
}

const fmCand = func(0, 0);

const [n, b] = [999, 434];

let ans = 0;
for (const fm of fmCand) {
  const m = fm + b; // m - f(m) = b => m = f(m) + b
  if (m <= n && fm === product(m)) {
    //log(fm, b);
    ans++;
  }
}

log(ans);
