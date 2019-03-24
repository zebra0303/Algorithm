var log = console.log,
  arr_num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  arr_pnum = [2, 3, 5, 7, 11, 13, 17],
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
      if (len_arr_new >= 3 &&
        parseInt(arr_new[len_arr_new - 2] + "" + arr_new[len_arr_new - 1] + "" + num, 10) % arr_pnum[len_arr_new - 3] !== 0) {
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