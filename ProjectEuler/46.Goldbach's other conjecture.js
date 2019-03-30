const log = console.log;
let arr_pnum = [2, 3, 5, 7, 11, 13],
  num, ans = 0, found, pidx, min_num;

function is_prime(num) {
  let rtn_val = true,
    pnum = arr_pnum[1], i;
    
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

num = 15;
while (ans === 0) {
  if (is_prime(num)) {
    arr_pnum.push(num);
  } else {
    found = false;
    pidx = 0;
    while (num - arr_pnum[pidx] > 0) {
      if (Math.sqrt((num - arr_pnum[pidx]) / 2) % 1 === 0) {
        found = true;
        break;
      }
      pidx++;
    }

    if (found === false) {
      ans = num;
    }
  }
  num += 2;
}

log(ans);