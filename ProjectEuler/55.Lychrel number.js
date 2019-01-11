var log = console.log,
cnt_lychrel = 0,
chk_sum,
obj_symmetry = {},
max_num = 50,
i,
reverse_num;

function reverse(num) {
  num += "";
  let rtn_val = num;
  if(num.length > 1) {
    rtn_val = num.split("").reverse().join("");
  }

  return rtn_val;
}

// 대칭수 체킹
function chk_symmetry(num) {
  let rtn_val = true,
  half;
  num = num + "";
  //log(num.length);
  if(num.length > 1) {
    half = Math.floor(num.length/2);
    //log(half);
    if(num.substr(0, half) !== reverse(num).substr(0, half)) {
      rtn_val = false;
    }
  }

  return rtn_val;
}

// lychre 체킹
function chk_lychrel(num, cnt_chk) {
    var sum = num + parseInt(reverse(num), 10);
    //log(num + " + " + reverse(num) + " = " + sum);
    if(chk_symmetry(sum) === false) {
      if(cnt_chk < 50) {
        //if(obj_symmetry[sum] === "undefined") {
          chk_lychrel(sum, cnt_chk+1);
        //}
      }
      else {
        cnt_lychrel++;
      }
    }
    else {
      obj_symmetry[num] = sum;
    }
}

for(i=1; i <= max_num; i++) {
  chk_lychrel(i, 1);
}


//chk_lychrel(5, 1);
/*
log("10".substr(0, 1));
log(reverse('10').substr(0, 1));
log(chk_symmetry(10));
*/
//log(obj_symmetry[50]);
log(obj_symmetry);
