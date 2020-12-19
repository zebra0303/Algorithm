const log = console.log;

/*
1) Math.pow(10, n-1) <= Math.pow(x, n) < Math.pow(10, n)
  => 1 =< x <= 9

2) Math.pow(10, n-1) <= Math.pow(x, n)
  => n-1 <= n*Math.log10(x)
  => n*(1 - Math.log10(x)) <= 1
  => n <= 1/(1 - Math.log10(x))
  => Max(n) = Math.floor(1/(1 - Math.log10(x)))
*/

let ans = 0;

for (let i = 1; i <= 9; i++) {
  ans += Math.floor(1 / (1 - Math.log10(i)));
}

log(ans);
