const log = console.log, num_max = 1000, len_digit = 10;
let num = 1, num_pow, sum = 0, ans;

function cut_num(num, length) {
  let str_num = num + "";
  if(str_num.length > length) {
    num = parseInt(str_num.substr(-1 * length), 10);
  }

  return num;
}

function get_pnum(num, count) {
  let pnum = num;
  for (let i = 2; i <= count; i++) {
    pnum *= num;
    pnum = cut_num(pnum, len_digit);
  }

  return pnum;
}

while (num <= num_max) {
  num_pow = get_pnum(num, num);
  sum += cut_num(num_pow, len_digit);
  num++;
}

ans = cut_num(sum, len_digit);
log(ans);