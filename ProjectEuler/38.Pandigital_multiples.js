var log = console.log,
  max_num = 9999,
  num = 9,
  chk_str_num,
  arr_seq,
  len_arr,
  ans = 0;

function is_pd(num) {
  var rtn_val = false;

  if (num.split("").sort().join("") ===
    "123456789") {
    rtn_val = true;
  }

  return rtn_val;
}

while (num < max_num) {
  arr_seq = [1, 2];
  chk_str_num = "";
  while (chk_str_num.length < 10) {
    chk_str_num = "";
    len_arr = arr_seq.length;

    for (i = 0; i < len_arr; i++) {
      chk_str_num += num * arr_seq[i];
    }

    if (chk_str_num.length === 9 && chk_str_num.indexOf('0') === -1) {
      if (is_pd(chk_str_num)) {
        if (ans < parseInt(chk_str_num, 10)) {
          ans = chk_str_num;
        }
      }
    }
    arr_seq.push(arr_seq[len_arr - 1] + 1);
  }
  num++;

  if ((num + "").substr(0, 1) < 9) {
    num *= 9;
  }
}

log(ans);