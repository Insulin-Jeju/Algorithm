const edge = [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
];
const n = 6;

function solution(n, edge) {
  console.log(bfs(1, edge, n));
  return bfs(1, edge, n);
}

const bfs = (start, arr, end) => {
  const visited = new Array(end + 1).fill(false);
  const level = new Array(end + 1).fill(0);
  const queue = [start]; //1
  visited[start] = true;

  while (queue.length) {
    const head = queue.shift();
    const lev = level[head] + 1;

    for (let node of arr) {
      if (node[0] === head && !visited[node[1]]) {
        queue.push(node[1]);
        visited[node[1]] = true;
        level[node[1]] = lev;
      } else if (node[1] === head && !visited[node[0]]) {
        queue.push(node[0]);
        visited[node[0]] = true;
        level[node[0]] = lev;
      }
    }
  }
  const maxLevel = Math.max(...level);
  return level.filter((i) => i === maxLevel).length;
};

solution(n, edge);
