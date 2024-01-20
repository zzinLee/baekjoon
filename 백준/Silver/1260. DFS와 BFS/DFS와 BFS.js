let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [a, ...b] = input;
  const [_1, _2, start] = a.split(" ").map(Number);
  const connection = b.map((v) => v.split(" ").map(Number));

  const dfsString = dfs(start, connection);
  const bfsString = bfs(start, connection);
  const ans = [dfsString, bfsString];

  return ans.join("\n");
}

console.log(solution(input));

function doMapping(connection) {
  const map = {};

  for (const [from, to] of connection) {
    if (!map[from]) {
      map[from] = [to];
    } else {
      map[from].push(to);
    }

    if (!map[to]) {
      map[to] = [from];
    } else {
      map[to].push(from);
    }
  }

  return map;
}

function dfs(start, connection) {
  const map = doMapping(connection);
  const queue = [start];
  const visited = [];
  const visitedChecker = {};

  while (queue.length) {
    const current = queue.pop();

    if (!visitedChecker[current]) {
      visited.push(current);
      visitedChecker[current] = 1;

      if (!map[current]) {
        break;
      }

      if (map[current].length) {
        const sorted = map[current].sort((a, b) => b - a);
        queue.push(...sorted);
      }
    }
  }

  return visited.join(" ");
}

function bfs(start, connection) {
  const map = doMapping(connection);
  const queue = [start];
  const visited = [];
  const visitedChecker = {};

  while (queue.length) {
    const current = queue.shift();

    if (!visitedChecker[current]) {
      visited.push(current);
      visitedChecker[current] = 1;

      if (!map[current]) {
        break;
      }

      if (map[current].length) {
        const sorted = map[current].sort((a, b) => a - b);
        queue.push(...sorted);
      }
    }
  }

  return visited.join(" ");
}
