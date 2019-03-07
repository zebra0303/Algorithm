var log = console.log,
  i,
  cnt = 0,
  arr = [200, 100, 50, 20, 10, 5, 2, 1],
  len_arr = arr.length;

function chk_sum(sum, idx) {
  var sum_prev = sum,
    num = arr[idx];

  if (idx === len_arr) {
    return null;
  } else {
    sum += num;

    if (sum === 200) {
      cnt++;
    } else if (sum < 200) {
      chk_sum(sum, idx);
    }

    if (sum_prev > 0) {
      chk_sum(sum_prev, idx + 1);
    }
  }
}

for (i = 0; i < len_arr; i++) {
  chk_sum(0, i);
}

log(cnt);
