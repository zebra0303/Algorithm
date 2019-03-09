var log = console.log,
  obj_factorial = {
    "0": 1,
    "1": 1,
    "2": 2,
    "3": 6,
    "4": 24,
    "5": 120,
    "6": 720,
    "7": 5040,
    "8": 40320,
    "9": 362880
  },
  i,
  ans = 0;

function get_fnum(num) {
  var fnum;
  if (num <= 1) {
    return 1;
  }

  if (typeof obj_factorial[num] === "undefined") {
    fnum = num * get_fnum(num - 1);
    obj_factorial[num] = fnum;
  } else {
    fnum = obj_factorial[num];
  }

  return fnum;
}

function is_curious(num) {
  var rtn_val = false,
    arr_num = (num + "").split(""),
    digit,
    sum_fnum = 0;

  for (digit of arr_num) {
    //sum_fnum += get_fnum(parseInt(digit, 10));
    sum_fnum += obj_factorial[digit];
  }

  return sum_fnum === num;
}

for (i = 11; i < 2540160; i++) {
  if (is_curious(i)) {
    ans += i;
  }
}

log(ans);
