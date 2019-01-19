var log = console.log,
  chk_term_cnt = 1000,
  f_term = 2,
  prev = (f_term - 1) % 2,
  cur,
  ten_num,
  i,
  arr_fibo = [
    [1],
    [1]
  ];

while (arr_fibo[prev].length < chk_term_cnt) {
  cur = f_term % 2;
  len = Math.max(arr_fibo[cur].length, arr_fibo[prev].length);
  for (i = 0; i < len; i++) {
    if (typeof arr_fibo[cur][i] === "undefined") {
      arr_fibo[cur][i] = 0;
    }

    arr_fibo[cur][i] += arr_fibo[prev][i];
    if (arr_fibo[cur][i] >= 10) {
      if (typeof arr_fibo[cur][i + 1] === "undefined") {
        arr_fibo[cur][i + 1] = 0;
      }
      ten_num = Math.floor(arr_fibo[cur][i] / 10);
      arr_fibo[cur][i + 1] += ten_num;
      arr_fibo[cur][i] -= ten_num * 10;
    }
  }
  prev = cur;
  f_term++;
}

log("The index of the first term in the Fibonacci sequence to contain " + chk_term_cnt + " digits is " + f_term + ".");
log("And the Fibonacci number is " + arr_fibo[cur].reverse().join(""));