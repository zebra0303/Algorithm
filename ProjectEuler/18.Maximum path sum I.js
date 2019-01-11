var log = console.log,
txt_num = `75
95 64
17 47 82
18 35 87 10
20 04 82 47 65
19 01 23 75 03 34
88 02 77 73 07 63 67
99 65 04 28 06 16 70 92
41 41 26 56 83 40 80 70 33
41 48 72 33 47 32 37 16 94 29
53 71 44 65 25 43 91 52 97 51 14
70 11 33 28 77 73 17 78 39 68 17 57
91 71 52 38 17 14 91 43 58 50 27 29 48
63 66 04 68 89 53 67 30 73 16 69 87 40 31
04 62 98 27 23 09 70 98 73 93 38 53 60 04 23`,
arr_line,
arr_num,
arr_sum = [],
max = 0,
len_num,
len_line;


arr_line = txt_num.split(/\n/);
len_line = arr_line.length;
for(let i=0; i<len_line; i++) {
  arr_num = arr_line[i].split(" ");
  len_num = arr_num.length;
  for(let j=0; j<len_num; j++) {
    let sum = 0,
    num = parseInt(arr_num[j], 10);

    if(i>0) {
      if(j===0) {
        sum = num + arr_sum[i-1][j];
      }
      else if(j === len_num-1) {
        sum = num + arr_sum[i-1][j-1];
      }
      else {
       sum = Math.max(num + arr_sum[i-1][j-1], num + arr_sum[i-1][j]);
     }
   }
    else {
      sum = num;
    }

    if (typeof arr_sum[i] === 'undefined') {
        arr_sum[i] = [];
    }
    arr_sum[i].push(sum);
  }
}

log(Math.max(...arr_sum[len_line - 1]));
