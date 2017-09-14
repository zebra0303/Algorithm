var arr_data = [13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7],
     len = arr_data.length,
     max,
     chk_max,
     chk_idx=0,
     chk_cnt=0,
     child_max,
     i, j;

 max = arr_data[0];
 for (i = 1; i < len; i++) {
     // reset chk_max
     chk_max = 0;
     child_max = 0;

     for (j = i; j > chk_idx; j--) {
       chk_cnt++;
       console.log(chk_cnt + ", "+ i+":"+j);
         chk_max += arr_data[j];
         if(child_max < chk_max) {
           child_max = chk_max;
         }
     }

     if(chk_max > 0) {
       max += chk_max;
       chk_idx = i;
       //console.log("chk: "+ i + ":" +j);
     }

     if (child_max > max) {
         max = child_max;
         chk_idx = i;
         //console.log(i + ":" +j);
     }


 }

 console.log(max);
