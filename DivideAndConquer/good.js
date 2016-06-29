var arr_data = [13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7],
    len = arr_data.length,
    i, j;

function find_max_crossing_subarray(arr_data, low, mid, high) {
  var left_sum = -Infinity,
  max_left,
  right_sum = -Infinity,
  max_right,
  sum = 0,
  i, j;

  for(i=mid; i>low; i--) {
    sum += arr_data[i];
    if(sum > left_sum) {
      left_sum =sum;
      max_left = i;
    }
  }
  sum = 0;
  for(j=mid+1; j<=high; j++) {
    sum += arr_data[j];
    if(sum > right_sum) {
      right_sum = sum;
      max_right = j;
    }
  }

  return [max_left, max_right, left_sum + right_sum];
}

function find_maximum_subarray(arr_data, low, high) {
  var mid,
  arr_left, arr_right,
  left_low, left_high, left_sum,
  right_low, right_high, right_sum,
  cross_low, cross_high, cross_sum;

  if(high === low) {
    return [low, high, arr_data[low]];
  }
  else {
    mid = Math.floor((low+high)/2);
    //console.log("mid: " + mid + ", low: " + low + ", high: " + high);
    arr_left = find_maximum_subarray(arr_data, low, mid);
    left_low = arr_left[0];
    left_high = arr_left[1];
    left_sum = arr_left[2];
    arr_right = find_maximum_subarray(arr_data, mid+1, high)
    right_low = arr_right[0];
    right_high = arr_right[1];
    right_sum = arr_right[2];
    arr_cross = find_max_crossing_subarray(arr_data, low, mid, high)
    cross_low = arr_cross[0];
    cross_high = arr_cross[1];
    cross_sum = arr_cross[2];

    if(left_sum >= right_sum && left_sum >= cross_sum) {
      return [left_low, left_high, left_sum];
    }
    else if(right_sum >= left_sum && right_sum >= cross_sum) {
      return [right_low, right_high, right_sum];
    }
    else {
      return [cross_low, cross_high, cross_sum];
    }
  }
}

var a = find_maximum_subarray(arr_data, 0, len-1);
console.log(a);
