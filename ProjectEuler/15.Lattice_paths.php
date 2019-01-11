<?php
$size_matrix = 20;
$cnt = 0;
$way_array = [];
$x = 0;
$y = 0;
/*
for ($x = 0; $x <= $size_matrix; $x++) {
  $way_array[$x][0] = 1;
  $way_array[0][$x] = 1;
}


for ($x = 1; $x <= $size_matrix; $x++) {
  for ($y = 1; $y <= $size_matrix; $y++) {
    $way_array[$x][$y] = $way_array[$x][$y - 1] + $way_array[$x - 1][$y];
  }
}

print_r($way_array[$size_matrix][$size_matrix]);
*/
$ans = 1;
for ($i = 1; $i <= $size_matrix; $i++) {
  //$ans *= ($i+ $size_matrix)/$i;
  $ans *= 1 + $size_matrix/$i;
}


print($ans);
//echo PHP_EOL;
//print_r((1/3) + (1/3) + (1/3));

print_r(number_format(pow(2, 1000), 0, '', ''));
