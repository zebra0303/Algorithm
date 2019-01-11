var log=console.log,
max_num = 10000,
arr_pnum = [2, 3, 5],
chk_num,
pnum,
ans = 0,
result = 0,
cache = {}; // {284:220, 220:284}

function is_prime(num) {
    let rtn_val = true,
    pnum,
    i;

   for(i=0; arr_pnum[i] <= Math.sqrt(num); i++) {
      pnum = arr_pnum[i];
      if(num%pnum === 0) {
        rtn_val = false;
        break;
      }
    }

   return rtn_val;
}

// (자신을 제외한) 약수의 합
function sumfn(num) {
  let arr_dnum = {},
  pnum,
  org_num = num,
  sum =1,
  rtn = 1,
  idx = 0;

  while(num > 1) {
    pnum = arr_pnum[idx];
    while(num%pnum === 0) {
      if(typeof arr_dnum[pnum] === "undefined") {
        arr_dnum[pnum] = 1;
      }
      else {
        arr_dnum[pnum]++;
      }
      num /= pnum;
    }
    idx++;
  }

  for(var key in arr_dnum) {
    let val = arr_dnum[key];
    sum = 0;
    while(val >= 0) {
      sum += Math.pow(key, val);
      val--;
    }
    rtn *= sum;
  }
  rtn -= org_num;

  return rtn;
}

// 소수 찾기
// 우애수 값이 더 큰값이 나올 수 있으므로 버퍼(*1.5)가 필요함
chk_num = Math.round(max_num*1.5);
pnum = 7;
while(pnum <= chk_num) {
   if(is_prime(pnum)) {
     arr_pnum.push(pnum);
   }
  pnum += 2;
}

chk_num = max_num;
while(chk_num > 1) {
  if (typeof cache[chk_num] !== 'undefined') {
    result = cache[chk_num];
  }
  else {
    result = sumfn(chk_num);
  }

  if(result === 1) { // 소수인 경우
    chk_num--;
    continue;
  }
  else if(chk_num === result) {
    log("완전수 : " + chk_num);
  }
  else if(typeof cache[chk_num] !== "undefined" ||
          chk_num === sumfn(result)) {
    ans += chk_num;
    cache[result] = chk_num;
  }
  chk_num--;
}

log(cache);
log(ans);
