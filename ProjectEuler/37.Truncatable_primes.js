var log = console.log,
  arr_pnum = [2, 3, 5, 7],
  obj_pnum = {2: 1, 3: 1, 5: 1, 7: 1},
  arr_tpnum = [],
  sum_tpnum = 0,
  max_cnt = 11,
  t_cnt = 0,
  last_pnum = 7;

function is_prime(num) {
  var rtn_val = true,
    pnum, i;

  for (i = 0; arr_pnum[i] <= Math.sqrt(num); i++) {
    pnum = arr_pnum[i];
    if (num % pnum === 0) {
      rtn_val = false;
      break;
    }
  }

  return rtn_val;
}

function is_tprime(num) {
  var rtn_val = true,
    str_num = num + "",
    len_str = str_num.length,
    i, num_left, num_right;

  for (i = 1; i < len_str; i++) {
    num_left = str_num.substring(i);
    num_right = str_num.substring(0, len_str - i);

    if (typeof obj_pnum[num_left] === "undefined" || typeof obj_pnum[num_right] === "undefined") {
      rtn_val = false;
      break;
    }
  }

  return rtn_val;
}

while (t_cnt < max_cnt) {
  last_pnum += 2;
  while (!is_prime(last_pnum)) {
    last_pnum += 2;
  }
  arr_pnum.push(last_pnum);
  obj_pnum[last_pnum] = 1;

  if (is_tprime(last_pnum)) {
    arr_tpnum.push(last_pnum);
    sum_tpnum += last_pnum;
    t_cnt++;
  }
}

log(sum_tpnum);