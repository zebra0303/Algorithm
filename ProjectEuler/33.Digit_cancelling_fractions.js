var log = console.log,
  i, j,
  mn = 1,
  md = 1;

function is_non_trivial(numerator, denominator) {
  var rtn_val = false,
    arr_digit = (denominator + "").split(""),
    i, len_arr = arr_digit.length,
    cancel_digit, sn, sd;

  for (digit of arr_digit) {
    if ((numerator + "").indexOf(digit) > -1) {
      cancel_digit = digit;
      sd = parseInt((denominator + "").replace(cancel_digit, ""), 10);
      break;
    }
  }

  if (typeof cancel_digit !== "undefined" && cancel_digit !== "0" && sd > 0) {
    sn = parseInt((numerator + "").replace(cancel_digit, ""), 10);
    rtn_val = sn / sd === numerator / denominator;
  }

  return rtn_val;
}

for (i = 11; i < 100; i++) {
  for (j = i + 1; j < 100; j++) {
    if (is_non_trivial(i, j)) {
      mn *= i;
      md *= j;
    }
  }
}

log(md / mn);