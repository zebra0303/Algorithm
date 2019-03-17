var log = console.log,
  arr_num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  ans = 0;

function make_pd_case(arr_new, arr_old) {
  var num, i,
    len_arr_new = arr_new.length,
    len_arr_old = arr_old.length,
    arr_new_clone, arr_old_clone;

  if (len_arr_old === 0) {
    ans += parseInt(arr_new.join(""), 10);
  } else {
    for (i = 0; i < len_arr_old; i++) {
      num = arr_old[i];
      if (len_arr_new === 3 && parseInt(arr_new[1] + "" + arr_new[2] + "" + num, 10) % 2 !== 0) {
        continue;
      } else if (len_arr_new === 4 && parseInt(arr_new[2] + "" + arr_new[3] + "" + num, 10) % 3 !== 0) {
        continue;
      } else if (len_arr_new === 5 && parseInt(arr_new[3] + "" + arr_new[4] + "" + num, 10) % 5 !== 0) {
        continue;
      } else if (len_arr_new === 6 && parseInt(arr_new[4] + "" + arr_new[5] + "" + num, 10) % 7 !== 0) {
        continue;
      } else if (len_arr_new === 7 && parseInt(arr_new[5] + "" + arr_new[6] + "" + num, 10) % 11 !== 0) {
        continue;
      } else if (len_arr_new === 8 && parseInt(arr_new[6] + "" + arr_new[7] + "" + num, 10) % 13 !== 0) {
        continue;
      } else if (len_arr_new === 9 && parseInt(arr_new[7] + "" + arr_new[8] + "" + num, 10) % 17 !== 0) {
        continue;
      }

      arr_new_clone = arr_new.slice(0);
      arr_new_clone.push(num);
      arr_old_clone = arr_old.slice(0);
      arr_old_clone.splice(arr_old.indexOf(num), 1);
      make_pd_case(arr_new_clone, arr_old_clone);
    }
  }
}

make_pd_case([], arr_num);

log(ans);