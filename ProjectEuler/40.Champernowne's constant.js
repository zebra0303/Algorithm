var log = console.log,
  cur_pos = 0,
  num = 1,
  str_num,
  len_pos,
  prev_len_pos = 0,
  mv_left,
  max_pos = 1000000,
  ans = 1;

while (cur_pos <= max_pos) {
  str_num = num + "";
  cur_pos += str_num.length;
  len_pos = (cur_pos + "").length;
  if (len_pos > prev_len_pos) {
    mv_left = cur_pos % Math.pow(10, len_pos - 1);
    ans *= parseInt(str_num.substr(str_num.length - (1 + mv_left), 1), 10);
  }
  prev_len_pos = len_pos;
  num++;
}

log(ans);