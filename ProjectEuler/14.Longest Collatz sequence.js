var log = console.log,
lnum = 1000000,
max_cnt = 0,
max_num,
cnt_tmp,
chk_cnt = 0,
obj_hs = {};
/*
n → n / 2 (n이 짝수일 때)
n → 3 n + 1 (n이 홀수일 때)
*/
//13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
for(let i=lnum; i>1; i--) {
//for(let i=2; i<=lnum; i++) {
  let num = i;
  let cnt = 1;
  let obj_tmp = {};
  if(typeof obj_hs[num] !== "undefined") {
    continue;
  }

  while(num > 1) {
    if(num%2 === 0) {
      num /= 2;
    }
    else {
      num = num*3 + 1;
    }

    if(typeof obj_hs[num] === "undefined") {
      obj_tmp[num] = cnt;
    }
    cnt++;
    chk_cnt++;
  }
  //log(obj_tmp);
  for(let j in obj_tmp) {
    //log(j);
    cnt_tmp = cnt - obj_tmp[j];
    obj_hs[j] = cnt_tmp;
    if(cnt_tmp > max_cnt) {
      max_cnt = cnt_tmp;
      max_num = j;
    }
    chk_cnt++;
  }
  obj_hs[i] = cnt;
  if(cnt > max_cnt) {
    max_cnt = cnt;
    max_num = i;
  }

}
//log(obj_hs);
log(max_cnt);
log(max_num);
