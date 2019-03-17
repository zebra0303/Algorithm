var log = console.log,
  arr_pnum = [2, 3, 5, 7, 11, 13],
  len_max_pd = 7,
  ans,
  chk_pnum = 15; // last pnum(13) + 2

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

function is_pandigital(num) {
  var rtn_val = false,
    chk_pd_num = "123456789",
    str_num = num + "",
    len_num = str_num.length;

  if (str_num.split("").sort().join("") === chk_pd_num.substr(0, len_num)) {
    rtn_val = true;
  }

  return rtn_val;
}

var arr_pd = [];
while ((chk_pnum + "").length <= len_max_pd) {
  while (!is_prime(chk_pnum)) {
    chk_pnum += 2;
  }

  if ((chk_pnum + "").length === 7 &&
    (chk_pnum + "").substr(0, 1) === "7" &&
    is_pandigital(chk_pnum)) {
    ans = chk_pnum;
  }

  chk_pnum += 2;
}

log(ans);