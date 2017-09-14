<?php
// 1 1 2 3 5
function fibo($n) {
  if($n < 3) {
    return 1;
  }

  return fibo($n-2) + fibo($n-1);
}

echo fibo(43);
