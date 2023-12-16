const log = console.log;
// data sample : https://record-everything.tistory.com/entry/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0-DFS%EC%99%80-BFS
const edges = [
  [1, 2],
  [1, 3],
  [2, 4],
  [3, 4],
  [3, 5],
  [4, 6],
  [5, 7],
  [5, 8],
  [7, 8],
];

const dfs = (graph, root) => {
  const result = [];
  const waiting = [];
  waiting.push(root);

  while (waiting.length > 0) {
    const current = waiting.pop();
    if (!result.includes(current)) {
      result.push(current);
      waiting.push(...graph[current]);
    }
  }

  return result;
};

const bfs = (graph, root) => {
  const result = [];
  const waiting = [];
  waiting.push(root);

  while (waiting.length > 0) {
    const current = waiting.shift();
    if (!result.includes(current)) {
      result.push(current);
      waiting.push(...graph[current]);
    }
  }

  return result;
};

const convGraph = (edges) => {
  const graph = {};

  for (edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];

    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};

const graph = convGraph(edges);

log('graph: ', graph);
log('dfs: ', dfs(graph, 1));
log('bfs: ', bfs(graph, 1));
