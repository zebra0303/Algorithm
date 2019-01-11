"use strict"
var log = console.log;

var cnt=0, bmax=999, bmin=100,num, i=bmax, j, k=0, max=0, max_i=0, max_j=0;

function is_symmetry(num) {
  num += "";
  var rnum = num.split("").reverse().join("");
  return rnum === num;
}

while(i>=bmin) {
  j=bmax;
  while(j>=bmin) {
    num = i*j;
    if(j>i || num%10 === 0) {
      j--;
      continue;
    }

    if(i < max_i && j < max_j ) {
      j--;
      break;
    }

    // 대칭수 체킹
    if(num > max && is_symmetry(num)) {
      // update max value
      max = num;
      max_i = i;
      max_j = j;
    }
    //log(i + "*" + j + "=" + num);
    j--;
    cnt++;
  }
  i--;
}

log(cnt);
log(max_i + "*" + max_j + "=" + max);
