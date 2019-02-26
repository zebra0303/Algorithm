var log = console.log,
  i,
  sq_num = 5,
  ans = 0;

function sqsum(num) {
  var arr_num = (num + "").split(""),
    arr_len = arr_num.length,
    i,
    sum = 0;

  for (i = 0; i < arr_len; i++) {
    sum += Math.pow(parseInt(arr_num[i], 10), sq_num);
  }

  return sum;
}

// 354294 = Math.pow(9, 5)*6; => Math.pow(9, 5)*7 has still 6 digits
// 64 = Math.(2, 5)*2 => minimum bound
for (i = 354293; i > 64; i--) {
  if (i == sqsum(i)) {
    ans += i;
  }
}

log(ans);