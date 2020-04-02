const log = console.log;
let ans = 0;

function getCbNum(n, r) {
  let num = 1;
  for (let i = n; i > r; i--) {
    num *= i;
  }

  for (let j = n - r; j > 1; j--) {
    num /= j;
  }

  return num;
}


for (let i = 23; i <= 100; i++) {
  for (let j = 1; j < i; j++) {
    const num = getCbNum(i, j);

    if (num >= 1000000) {
      ans++;
    }
  }
}

log(ans);
