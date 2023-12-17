const log = console.log;

const grid = ['WLWWW', 'WLWWW', 'WWWLW', 'WWLLW', 'LLWWW'];
/*
W는 물이고 L(연결된 L포함)은 섬. 섬 갯수 구하기
[
  [ 'W', 'L', 'W', 'W', 'W' ],
  [ 'W', 'L', 'W', 'W', 'W' ],
  [ 'W', 'W', 'W', 'L', 'W' ],
  [ 'W', 'W', 'L', 'L', 'W' ],
  [ 'L', 'L', 'W', 'W', 'W' ]
]
*/
const islandCount = (grid) => {
  const visited = new Set();
  const matrix = grid.map((row) => row.split(''));
  //log(matrix);
  let cnt = 0;
  const go = (matrix, r, c, visited) => {
    if (r < 0 || c < 0 || r === matrix.length || c === matrix[0].length)
      return false;
    if (matrix[r][c] === 'W') return false;
    const key = r + ':' + c;
    if (visited.has(key)) return false;
    visited.add(key);
    //log(r, c, visited);
    go(matrix, r + 1, c, visited);
    go(matrix, r - 1, c, visited);
    go(matrix, r, c + 1, visited);
    go(matrix, r, c - 1, visited);
    return true;
  };

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (go(matrix, r, c, visited)) {
        //log(r, c, visited);
        cnt++;
      }
    }
  }

  return cnt;
};

log(islandCount(grid));
