const log = console.log,
  max_num = 1000000;

let arr_pnum = [2, 3, 5, 7],
  obj_pnum = { "2": 1, "3": 1, "5": 1, "7": 1 },
  pnum = arr_pnum[arr_pnum.length - 1] + 2,
  i,
  j,
  len_arr_pnum,
  ans,
  sum_pnum,
  max_pnum,
  cp_cnt,
  max_cp_cnt = 0;

function is_pnum(num) {
  const num_sqrt = Math.sqrt(num);
  let rtn_val = true,
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

while (pnum < max_num) {
  if (is_pnum(pnum)) {
    arr_pnum.push(pnum);
    obj_pnum[pnum] = 1;
  }
  pnum += 2;
}

len_arr_pnum = arr_pnum.length;
max_pnum = arr_pnum[len_arr_pnum - 1];

for (i = 0; i < len_arr_pnum - 1; i++) {
  sum_pnum = arr_pnum[i];
  cp_cnt = 1;
  for (j = i + 1; sum_pnum <= max_pnum; j++) {
    sum_pnum += arr_pnum[j];
    cp_cnt++;
    if (typeof obj_pnum[sum_pnum] !== "undefined" && cp_cnt > max_cp_cnt) {
      max_cp_cnt = cp_cnt;
      ans = sum_pnum;
    }
  }
}

log(ans);
