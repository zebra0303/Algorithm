var log = console.log,
  limit = 1000,
  num,
  arr_remainder,
  remainder,
  digit,
  idx_repeat_start,
  len_repeat,
  repeat_part,
  stop,
  max_repat_len = 0,
  ans_num,
  ans_repeat_digits;

for (num = 2; num <= limit; num++) {
  remainder = 0.1;
  digit = 0;
  arr_remainder = [];
  stop = false;
  repeat_digits = "";

  while (stop === false) {
    remainder = remainder * 10 % num;
    idx_repeat_start = arr_remainder.indexOf(remainder);

    if (idx_repeat_start > -1) {
      stop = true;
    } else {
      arr_remainder.push(remainder);
      digit = Math.floor(remainder * 10 / num);
      repeat_digits += "" + digit;
    }
  }

  repeat_part = repeat_digits.substr(idx_repeat_start);
  len_repeat = (repeat_part !== "0") ? repeat_part.length : 0;
  if (len_repeat > max_repat_len) {
    max_repat_len = len_repeat;
    ans_num = num;
    ans_repeat_digits = repeat_digits;
  }
}

log("1/" + ans_num + " has " + max_repat_len + "-digit recurring cycle!!!");