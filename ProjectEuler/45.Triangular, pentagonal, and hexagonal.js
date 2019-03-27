const log = console.log;
let ans = Infinity, seq = 144, num;

function is_pentagonal(num) {
  return ((Math.sqrt(1 + 24 * num) + 1) / 6) % 1 === 0;
}

while (ans === Infinity) {
  // Every hexagonal numbers are triangle number as well
  num = seq * (2 * seq - 1);
  if (is_pentagonal(num)) {
    ans = num;
  } else {
    seq++;
  }
}

log(ans);