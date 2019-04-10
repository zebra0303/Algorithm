const log = console.log;

let arr_pnum = [2, 3, 5, 7, 11, 13, 17],
  pnum = arr_pnum[arr_pnum.length - 1] + 2,
  obj_chk_prime = {},
  key_pnum,
  ans;

function is_pnum(num) {
  let rtn_val = true,
    num_sqrt = Math.sqrt(num),
    i,
    pnum = 2;

  for (i = 0; pnum <= num_sqrt; i++) {
    pnum = arr_pnum[i];
    if (num % pnum === 0) {
      rtn_val = false;
      break;
    }
  }

  return rtn_val;
}

function is_pp(arr_num) {
  let i, j, k, first, second, third;
  const len_arr = arr_num.length;

  for (i = 0; i < len_arr; i++) {
    first = arr_num[i];
    for (j = i + 2; j < len_arr; j++) {
      third = arr_num[j];
      for (k = i + 1; k < j; k++) {
        second = arr_num[k];
        if ((first + third) / 2 === second) {
          ans = first + "" + second + "" + third;
          return true;
        }
      }
    }
  }
  return false;
}

while (pnum < 10000) {
  if (is_pnum(pnum)) {
    arr_pnum.push(pnum);
    if (pnum > 1000) {
      key_pnum = (pnum + "")
        .split("")
        .sort()
        .join("");

      if (typeof obj_chk_prime[key_pnum] === "undefined") {
        obj_chk_prime[key_pnum] = [pnum];
      } else {
        obj_chk_prime[key_pnum].push(pnum);
      }
    }
  }
  pnum += 2;
}

Object.values(obj_chk_prime)
  .filter(arr_pnum => arr_pnum.length >= 3)
  .some(arr_pnum => {
    if (arr_pnum[0] !== 1487 && is_pp(arr_pnum)) {
      return arr_pnum;
    }
  });

log(ans);