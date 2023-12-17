const log = console.log;
/*
미로상 최단 거리 찾기
0, 0부터 n, m까지 최단 거리 찾기 (경로가 없을경우 -1리턴)
맵값이 1인경로만 이동가능  
https://school.programmers.co.kr/learn/courses/30/lessons/1844
BFS(Breadth First Search ) : https://www.youtube.com/watch?v=tWVWeAqZ0WU&t=7213s 
*/
function shortestDistance(maps) {
  const rowCnt = maps.length;
  const colCnt = maps[0].length;
  const visited = new Set();
  const queue = [[0, 0, 0]];
  while (queue.length > 0) {
    let [r, c, cnt] = queue.shift();
    cnt++;
    if (r === rowCnt - 1 && c === colCnt - 1) return cnt;
    const key = r + ':' + c;
    if (
      r >= 0 &&
      c >= 0 &&
      r < rowCnt &&
      c < colCnt &&
      !visited.has(key) &&
      maps[r][c] === 1
    ) {
      visited.add(key);
      queue.push([r, c + 1, cnt]);
      queue.push([r + 1, c, cnt]);
      queue.push([r - 1, c, cnt]);
      queue.push([r, c - 1, cnt]);
    }
  }
  return -1;
}

log(
  shortestDistance([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
); // 11

log(
  shortestDistance([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ])
); // -1
