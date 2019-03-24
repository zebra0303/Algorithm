const log = console.log;
let arr_ptg = [], ans = Infinity, i = 1, j;

function is_ptg(num) {
  return ((1 + Math.sqrt(1 + 24 * num)) / 6) % 1 === 0;
}

while (ans === Infinity) {
  num_ptg = i * (3 * i - 1) / 2;
  arr_ptg.push(num_ptg);
  len_ptg = arr_ptg.length;

  for (j = len_ptg - 2; j >= 0; j--) {
    min_ptg = num_ptg - arr_ptg[j];
    if (is_ptg(min_ptg)) {
      add_ptg = num_ptg + arr_ptg[j];
      if (is_ptg(add_ptg)) {
        ans = min_ptg;
      }
    }
  }
  i++;
}

log(ans);