var log=console.log;

function get_ans(num) {
  /*
  var pow_sum,
  sum_pow,
  m = num*(num+1);

  pow_sum = Math.pow(m/2, 2);
  sum_pow = (1/3*m*(num + 1/2)).toFixed(0);
  log("pow_sum : " + pow_sum);
  log("sum_pow : " + sum_pow);

  return pow_sum - sum_pow;
  */
  return (num-1)*num*(num+1)*(3*num+2)/12;
}

log("answer is " + get_ans(100));
