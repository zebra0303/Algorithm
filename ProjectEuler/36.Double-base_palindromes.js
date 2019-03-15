var log = console.log,
  num = 3,
  max_num = 1000000,
  ans = 1;

function is_palindrome(num) {
  var rtn_val = false,
    str_num = num + "",
    str_reverse = str_num.split("").reverse("").join("");

  if (str_num === str_reverse) {
    rtn_val = true;
  }

  return rtn_val;
}

while (num < max_num) {
  if (is_palindrome(num) &&
    is_palindrome((num).toString(2))) {
    ans += num;
  }
  num++;
}

log(ans);