<?php
// 1 1 2 3 5
$arr_fibo = [0, 1];

function fibo($n) {
  global $arr_fibo;
  if(isset($arr_fibo[$n])) {
    return $arr_fibo[$n];
  }

  $arr_fibo[$n] = fibo($n-2) + fibo($n-1);

  return $arr_fibo[$n];
}

echo fibo(43)."\n";

echo("golden ratio : " + fibo(1476)/fibo(1475));
