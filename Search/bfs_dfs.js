const log = console.log;
// data sample : https://record-everything.tistory.com/entry/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0-DFS%EC%99%80-BFS
// https://www.youtube.com/watch?v=fAAZixBzIAI
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

const convGraph = (edges) => {
  const graph = {};

  for (const edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};

const graph = convGraph(edges);

const depthFirstPrint = (graph, source, visited = new Set()) => {
  const result = [];
  const stack = [source];

  while (stack.length > 0) {
    const current = stack.pop();
    if (visited.has(current)) continue;
    visited.add(current);
    result.push(current);

    for (const child of graph[current]) {
      stack.push(child);
    }
  }

  return result;
};

const depthFirstPrintRecursive = (graph, source, visited = new Set()) => {
  if (visited.has(source)) return [];
  visited.add(source);
  let children = [];
  for (const child of graph[source]) {
    children = [
      ...depthFirstPrintRecursive(graph, child, visited),
      ...children,
    ];
  }

  return [source, ...children];
};

const breadthFirstPrint = (graph, source, visited = new Set()) => {
  const result = [];
  const queue = [source];

  while (queue.length > 0) {
    const current = queue.shift();
    if (visited.has(current)) continue;
    visited.add(current);
    result.push(current);
    for (const child of graph[current]) {
      queue.push(child);
    }
  }

  return result;
};

log(depthFirstPrint(graph, 1));
log(depthFirstPrintRecursive(graph, 1));
log(breadthFirstPrint(graph, 1));
