var log = console.log,
  a = 1, b = 1, c, // c=a+b (a<b<c)
  cur_perimeter = 0, // a+b+c
  max_perimeter = 1000,
  max_a = 292, // Math.floor(max_perimeter/(2+Math.sqrt(2)))
  max_cnt = 0,
  ans_perimeter,
  obj_perimeter = {};

for (a = 1; a < max_a; a++) {
  for (b = a+1; cur_perimeter <= max_perimeter; b++) {
    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    cur_perimeter = a + b + c;
    if (c % 1 === 0) {
      if (typeof obj_perimeter[cur_perimeter] === "undefined") {
        obj_perimeter[cur_perimeter] = 1;
      } else {
        obj_perimeter[cur_perimeter]++;
      }

      if (obj_perimeter[cur_perimeter] > max_cnt) {
        max_cnt = obj_perimeter[cur_perimeter];
        ans_perimeter = cur_perimeter;
      }
    }
  }
  cur_perimeter = 0;
}

log(ans_perimeter);