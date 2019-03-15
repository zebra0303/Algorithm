var log = console.log,
  arr_pnum = [2, 3, 5, 7, 11, 13],
  cur_pidx = 5,
  cur_pnum = arr_pnum[cur_pidx],
  cnt_circular = 5, // from 2 to 11
  max_num = 1000000,
  chk_num,
  obj_circular = {2: 1, 3: 1, 5: 1, 7: 1, 11: 1};

function is_prime(num) {
  var rtn_val = true,
    pnum, i;

  for (i = 0; arr_pnum[i] <= Math.sqrt(num); i++) {
    pnum = arr_pnum[i];
    if (num % pnum === 0) {
      rtn_val = false;
      break;
    }
  }

  return rtn_val;
}

function chk_circular(num) {
  var arr_digit = (num + "").split(""),
    len_num = arr_digit.length,
    biggest_num,
    chk_num,
    i,
    arr_chk_num = [num],
    cnt_pnum = 1,
    arr_circular_num = [num],
    circular_num,
    digit;

  for (i = 1; i < len_num; i++) {
    arr_chk_num.push(parseInt(arr_digit.slice(i).concat(arr_digit.slice(0, i)).join(""), 10));
  }

  biggest_num = Math.max(...arr_chk_num);
  if (biggest_num === num) {
    for (i = 1; i < len_num; i++) {
      chk_num = arr_chk_num[i];
      if (is_prime(chk_num)) {
        cnt_pnum++;
        arr_circular_num.push(chk_num);
      }
    }

    if (cnt_pnum === len_num) {
      for (circular_num of arr_circular_num) {
        if (typeof obj_circular[circular_num] === "undefined") {
          obj_circular[circular_num] = 1;
          cnt_circular++;
        } else {
          obj_circular[circular_num]++;
        }
      }
    }
  }
}

while (cur_pnum <= max_num) {
  chk_circular(cur_pnum);

  cur_pidx++;
  if (typeof arr_pnum[cur_pidx] === "undefined") {
    chk_num = cur_pnum + 2;
    while (!is_prime(chk_num)) {
      chk_num += 2;
    }
    arr_pnum[cur_pidx] = chk_num;
  }
  cur_pnum = arr_pnum[cur_pidx];
}

log(cnt_circular);