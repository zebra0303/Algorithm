const log = console.log,
  chk_count = 4;

let arr_pnum = [2, 3, 5, 7, 11, 13],
  obj_factor = {},
  obj_factor_prev = {},
  cnt_unique = 0,
  obj_ans_tmp,
  obj_ans = {},
  num = 14,
  ans = 1,
  pnum;

function prime_factorization(num) {
  let obj_rtn = {},
    org_num = num,
    pnum = arr_pnum[0],
    i = 0;

  while (pnum <= Math.sqrt(org_num)) {
    pnum = arr_pnum[i];
    if (num % pnum === 0) {
      if (typeof obj_rtn[pnum] === "undefined") {
        obj_rtn[pnum] = 1;
      } else {
        obj_rtn[pnum]++;
      }
      num /= pnum;
    } else {
      i++;
    }
  }

  if (num === org_num) {
    arr_pnum.push(num);
  }

  if (num > 1) {
    obj_rtn[num] = 1;
  }

  return obj_rtn;
}

while (Object.keys(obj_ans).length === 0) {
  obj_factor = prime_factorization(num);

  if (Object.keys(obj_factor_prev).length === chk_count && Object.keys(obj_factor).length === chk_count) {
    if (cnt_unique === 0) {
      obj_ans_tmp = obj_factor_prev;
      cnt_unique = 1;
    }

    cnt_unique++;
    if (cnt_unique === chk_count) {
      obj_ans = obj_ans_tmp;
    }

  } else {
    obj_factor_prev = obj_factor;
    cnt_unique = 0;
  }
  num++;
}

for (pnum in obj_ans) {
  ans *= obj_ans[pnum] * pnum;
}

log(ans);