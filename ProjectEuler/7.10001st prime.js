var log = console.log,
  arr_pnum = [2, 3, 5, 7, 11],
  cnt_pnum = arr_pnum.length,
  last_pnum = arr_pnum[cnt_pnum - 1],
  max_cnt = 10001;
// 10,001 번째 소수 구하기 - 104743

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

while (cnt_pnum < max_cnt) {
  last_pnum += 2; // 짝수 제외
  if (is_prime(last_pnum)) {
    arr_pnum[cnt_pnum] = last_pnum;
    cnt_pnum++;
  }
}

log(cnt_pnum + "번째 소수는 " + arr_pnum[cnt_pnum - 1] + "입니다.");
//log(arr_pnum);
