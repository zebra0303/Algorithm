var log = console.log,
  a, b, c, str_num, obj_pd = {},
  ans = 0;

function is_pandigital(digits) {
  var rtn_val = false;

  if (digits.length === 9 && digits.indexOf("0") === -1) {
    rtn_val = digits.split("").sort().join("") === "123456789";
  }

  return rtn_val;
}

for (a = 2; a <= 98; a++) {
  for (b = 123; b <= 4987; b++) {
    c = a * b;
    str_num = a + "" + b + "" + c;
    if (is_pandigital(str_num)) {
      if (typeof obj_pd[c] === "undefined") {
        obj_pd[c] = 1;
        ans += c;
      } else {
        obj_pd[c]++;
      }
    }
  }
}

log(ans);