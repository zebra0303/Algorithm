var log = console.log,
  num = 100,
  arr_fn = [1],
  sum = 0;

while (num > 1) {
  let len_arr = arr_fn.length;

  // mulify array values with facorial number
  for (let i = 0; i < len_arr; i++) {
    arr_fn[i] *= num;
  }

  // rearrange the array
  for (let i = 0; i < len_arr; i++) {
    let digit = arr_fn[i],
      idx = i;
    if (digit === 0) {
      continue;
    }

    while (digit > 0) {
      let div_num = digit % 10;
      if (idx === i || typeof arr_fn[idx] === "undefined") {
        if (idx > i && arr_fn[idx-1] >= 10) {
          len_arr++;
        }
        arr_fn[idx] = div_num;
      } else {
        arr_fn[idx] += div_num;
      }
      digit = Math.floor(digit / 10);
      idx++;
    }
  }
  num--;
}

// calculate the sum of digits
sum = arr_fn.reduce(function(acc, cur) {
  return acc + cur;
});
log(sum);
