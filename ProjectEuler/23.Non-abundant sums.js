var log = console.log,
  max = 28123,
  num,
  sum_dn,
  obj_pf,
  chk_sum = {},
  arr_pn = [2, 3, 5, 7, 11, 13, 17], // 소수
  arr_an = [12], // 초과수
  len_arr,
  min_sum = 0,
  sum, ans;

function get_obj_pf(num) {
  var obj_pf = {},
    idx_pn = 0,
    orign_num = num,
    pn = arr_pn[idx_pn];

  while (num > 1) {
    while (num % pn === 0) {
      if (typeof obj_pf[pn] === "undefined") {
        obj_pf[pn] = 1;
      } else {
        obj_pf[pn]++;
      }
      num = num / pn;
    }

    idx_pn++;
    if (num > 1 && idx_pn === arr_pn.length) {
      arr_pn.push(num);
    }
    pn = arr_pn[idx_pn];
  }

  return obj_pf;
}

for (num = 14; num <= max; num++) {
  // 소인수 분해
  obj_pf = get_obj_pf(num);
  // 약수 의 합
  sum_dn = 1;
  for (pn in obj_pf) {
    sum_dn *= ((Math.pow(pn, obj_pf[pn] + 1) - 1) / (pn - 1));
  }
  if ((sum_dn - num) > num) {
    // 초과수 추가
    arr_an.push(num);
  }
}

len_arr = arr_an.length
for (i = 0; i < len_arr; i++) {
  for (j = i; j < len_arr; j++) {
    sum = arr_an[i] + arr_an[j];
    if (sum <= max) {
      if (typeof chk_sum[sum] === "undefined") {
        min_sum += sum;
      }
      chk_sum[sum] = 1;
    }
  }
}

// 전체 합 에서 초과수로 만들어 지는 합 빼기
ans = max * (max + 1) / 2 - min_sum;
log(ans);