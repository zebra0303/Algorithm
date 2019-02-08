var log = console.log,
cnt_num=0,
chk_num = {},
a, b,
max_a = 100,
max_b = 100;

for(a=2; a<=max_a; a++) {
  for(b=2; b<=max_b; b++) {
    num = Math.log(Math.pow(a, b));
    if(typeof chk_num[num] === "undefined") {
      chk_num[num] = [];
      cnt_num++;
    }
    
    chk_num[num].push({'a': a, 'b': b});
  }
}
//log(chk_num);
log(cnt_num);