var arr_data = [13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7],
    len = arr_data.length,
    max,
    chk_max,
    i, j;

function find_maximum_subarray(arr_data, low, high) {
  var mid;
  if(high === low) {
    return [low, high, arr_data[low]];
  }
  else {
    mid = Math.floor((low+high)/2);
    console.log(mid);

  }
}
console.log(len);
var a = find_maximum_subarray([3], 0, 0);
console.log(a);
