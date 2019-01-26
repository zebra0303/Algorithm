var log = console.log,
  limit = 1000,
  num,
  ans,
  max_len = 0,
  max_repeat_digits,
  arr_remainder,
  prev_remainder,
  remainder,
  prev_digit,
  digit,
  idx_repeat_start,
  len_repeat,
  repeat_part,
  stop;

for (num = 2; num < limit; num++) {
  prev_remainder = 1;
  prev_digit = 0;
  arr_remainder = [];
  stop = false;
  repeat_digits = "";
  idx_repeat_start = -1;

  while (stop === false) {
    remainder = (prev_remainder - prev_digit * num) * 10;
    idx_repeat_start = arr_remainder.findIndex(function (val) {
      return val === remainder;
    });

    if (idx_repeat_start > -1) {
      stop = true;
    } else {
      arr_remainder.push(remainder);
      digit = Math.floor(remainder / num);
      repeat_digits += "" + digit;
      prev_remainder = remainder;
      prev_digit = digit;
    }
  }

  repeat_part = repeat_digits.substr(idx_repeat_start);
  len_repeat = (repeat_part !== "0") ? repeat_part.length : 0;
  if (len_repeat > max_len) {
    max_len = len_repeat;
    ans = num;
    max_repeat_digits = repeat_digits;
  }
}

log("1/" + ans + " has " + max_len + "-digit recurring cycle!!!");