var log = console.log,
arr_data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
arr_clone = arr_data.slice(0),
order = 1000000,
arr_fnum = [0, 1], // factorial numbers array
chk = order,
dnum,
fnum,
nf = new Intl.NumberFormat('en-US'),
ans = "";

function set_arr_fnum(num) {
  if(num > 1) {
    for(i=2; i<=num; i++) {
      arr_fnum.push(arr_fnum[arr_fnum.length - 1]*i);
    }
  }
}

// set factorial number array
set_arr_fnum(arr_data.length - 1);

while(chk > 1) {
  fnum = arr_fnum[arr_data.length-1];
  dnum = Math.floor(chk/fnum);
  chk = chk%fnum;
  
  if(chk === 0) {
    dnum--;
    chk = fnum;
  }
  ans += arr_data.splice(dnum, 1)[0];
}

while(arr_data.length > 0) {
  ans += arr_data.shift();
}

log(arr_clone.join(',') + "로 만들 수 있는 사전식 순열에서 " 
  + nf.format(order) + "번째는 " 
  + ans + "입니다.");