var arr_data = [13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7],
     len = arr_data.length,
     max,
     chk_max,
     chk_cnt=0,
     i, j;

 max = arr_data[0];
 for (i = 1; i < len; i++) {
     // reset chk_max
     chk_max = 0;
     for (j = i; j > 0; j--) {
         chk_cnt++;
         console.log(chk_cnt + ", "+ i+":"+j);
         chk_max += arr_data[j];
         if (chk_max > max) {
             max = chk_max;
         }
     }
 }

 console.log(max);
