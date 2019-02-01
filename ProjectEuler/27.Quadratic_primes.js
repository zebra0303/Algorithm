var log = console.log,
  arr_pnum = [2, 3, 5, 7, 11],
  len_arr_pnum = arr_pnum.length,
  last_pnum = arr_pnum[len_arr_pnum - 1],
  ce_limit = 1000,
  ce_a, ce_b, max = 0,
  i, j, k,
  arr_sign = [-1, 1],
  unum,
  ans;

//check the number is prime number
function is_prime(num) {
  var rtn_val = true,
    pnum = arr_pnum[1],
    i;
  if (num <= 1) {
    rtn_val = false;
  } else {
    for (i = 1; arr_pnum[i] <= Math.sqrt(num); i++) {
      pnum = arr_pnum[i];
      if (num % pnum === 0) {
        rtn_val = false;
        break;
      }
    }
  }

  return rtn_val;
}

// get prime numbers array
while (last_pnum <= ce_limit) {
  last_pnum += 2; // exept odd number

  if (is_prime(last_pnum)) {
    arr_pnum[len_arr_pnum] = last_pnum;
    len_arr_pnum++;
  }
}

for (i = 1; i < ce_limit; i += 2) {
  for (j = 0; j < 2; j++) {
    ce_a = arr_sign[j] * i;
    for (k = 0; k < len_arr_pnum; k++) {
      ce_b = arr_pnum[k];
      unum = 0;
      while (is_prime(Math.pow(unum, 2) + ce_a * unum + ce_b)) {
        unum++;
      }

      if (unum > max) {
        max = unum;
        ans = ce_a * ce_b;
        //log("a: " + ce_a + ", b: " + ce_b + ", max : " + max);
      }
    }
  }
}

log(ans);