var log = console.log,
pow_num = 1000,
num = Math.pow(2, pow_num),
len_num = Math.floor(Math.log10(num)),
sum = 0,Z
arr_num = [1],
digit;

for(let i=0; i<pow_num; i++) {
  let len_arr = arr_num.length,
  add_num = 0;
  for(let j=0; j<len_arr; j++) {
    arr_num[j] *= 2;
    arr_num[j] += add_num;
    if(arr_num[j] >= 10) {
      add_num = Math.floor(arr_num[j]/10);
      if(typeof arr_num[j+1] === "undefined") {
        arr_num[j+1] = add_num;
      }
      arr_num[j] -= 10;
    }
    else {
      add_num = 0;
    }
  }
  //log(arr_num);
}
//log(arr_num);
var len_all = arr_num.length;
for(let t=0; t<len_all; t++) {
  sum += arr_num[t];
}
log(sum);
/*
// 215 = 32768 => 26
// 1.0715086071862673e+301
for(let i=len_num; i>=0; i--) {
  digit = Math.floor(num/Math.pow(10, i));
  //log("num: " + num);
  num = num - digit*Math.pow(10, i);
  sum += digit;
  log(digit);
}
log(Math.pow(2, 1000));

log(sum);
*/
