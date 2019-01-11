var log = console.log,
year_start = 1901,
year_end = 2000,
arr_day_cnt = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
cnt_days,
cnt_sunday = 0,
week_day = 2; // Monday(1900/1/1) + 365%7 TODO : 향상 필요

/*
1900/1/1 => Monday not leap year  => 365%7 1
1901/1/1 => Tuesday
1901/1/1 => 2
1901/2/1 => 2 + 31%7 (3) => 5
*/

for(let year = year_start; year <= year_end; year++) {
  let is_leap = false;

  if(year%4 === 0 && !(year%100 === 0 && year%400 !== 0)) {
    is_leap = true;
  }

  for(let month = 1; month <= 12; month++) {
    //log( year + "/" + month + " ::: week day :" + week_day);
    if(week_day === 0) {
      cnt_sunday++;
    }

    // for next month
    cnt_days = arr_day_cnt[month-1];
    if(is_leap && month == 2) {
        cnt_days++;
    }
    week_day += cnt_days%7;
    week_day %= 7;
    //week_day = week_day%7;
  }

}

log(cnt_sunday);
