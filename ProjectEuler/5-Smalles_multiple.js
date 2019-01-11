"use strict"
var max_num = 20,
arr_pnum = [2, 3, 5],
pnum=2,
chk_num,
pow_num,
i,
ans=1;

//소수 찾기
function is_prime(num) {
    var rtn_val = true,
    pnum = arr_pnum[1],
    i;

   for(i=1; arr_pnum[i] <= Math.sqrt(num); i++) {
      pnum = arr_pnum[i];
      if(num%pnum === 0) {
        rtn_val = false;
        break;
      }
    }

   return rtn_val;
}
// (2, 20) => 2^4 = 16 return 4
function get_pow_num(num, chk_num) {
  return Math.floor(Math.log(chk_num)/Math.log(num));
}

TTT:
for(i=0; pnum <= max_num; i++) {
  if(typeof arr_pnum[i] === "undefined") {
    chk_num = pnum + 2;
    while(!is_prime(chk_num)) {
      chk_num += 2;
      if(chk_num > max_num) {
        break TTT;
      }
    }
    arr_pnum[i] = chk_num;
  }

 pnum = arr_pnum[i];
  //승수 찾기
  pow_num = get_pow_num(pnum, max_num);
  ans *= Math.pow(pnum, pow_num);
  //console.log(pnum + ":::" + pow_num);
}
console.log(ans);
