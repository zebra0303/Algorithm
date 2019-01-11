var log = console.log,
  tnum,
  arr_pnum = [2, 3, 5, 7, 11],
  cnt_pnum = arr_pnum.length,
  num = 1,
  cnt_div = 0,
  arr_exp,
  obj_factors;

//소수 찾기
function is_prime(num) {
  var rtn_val = true,
    pnum = arr_pnum[1],
    i;

  for (i = 1; arr_pnum[i] <= Math.sqrt(num); i++) {
    pnum = arr_pnum[i];
    if (num % pnum === 0) {
      rtn_val = false;
      break;
    }
  }

  return rtn_val;
}

// get_factors(12) = > return arr_factors[2=>2, 3=>1]
// 12/2 => 6  나머지 0 arr_factors[2] ++
// 6/2 => 3  나머지 0 arr_factors[2] ++
// 3/2 =>  나머지 > 0
// 3/3 => 나머지 0  arr_factors[3] ++
function get_factors(num) {
  var pidx = 0,
    pnum,
    chk_num,
    arr_factors = {};

  //log(num);
  while (num !== 1) {
    if (typeof arr_pnum[pidx] === "undefined") {
      chk_num = arr_pnum[pidx - 1] + 2;
      while (!is_prime(chk_num)) {
        chk_num += 2;
      }
      arr_pnum[pidx] = chk_num;
    }

    pnum = arr_pnum[pidx];
    while (num % pnum === 0) {
      if (typeof arr_factors[pnum] === "undefined") {
        arr_factors[pnum] = 0;
      }
      arr_factors[pnum]++;
      num /= pnum;
    }
    pidx++;
  }

  return arr_factors;
}

while (cnt_div < 500) {
  tnum = num * (num + 1) / 2;
  obj_factors = get_factors(tnum);
  arr_exp = Object.values(obj_factors);
  cnt_div = arr_exp.reduce(function(accum, cur) {
    return accum * (cur + 1);
  }, 1);

  num++;
}

log("* 삼각수 : " + tnum);
log("* N 까지의 합 : " + (num - 1));
log("* 약수 갯수 : " + cnt_div);
