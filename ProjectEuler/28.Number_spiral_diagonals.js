var log = console.log,
  ans = 1,
  len_matrix = 1001,
  depth = 1;

while (len_matrix >= depth * 2 + 1) {
  ans += 4 * Math.pow(2 * depth + 1, 2) - 12 * depth;
  depth++;
}

log(ans);