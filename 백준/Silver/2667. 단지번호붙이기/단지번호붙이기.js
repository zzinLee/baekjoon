let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = Number(input.shift());
  const map = input.map((row) => row.split("").map(Number));
  const moves = [[0, 1], [0, -1], [-1, 0], [1, 0]];
  const houses = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (map[i][j]) {
        const stack = [[i, j]];
        map[i][j] = 0;

        const houseCount = DFS(stack, map, moves, N);

        if (houseCount) {
          houses.push(houseCount);
        }
      }
    }
  }

  const ans = [];
  houses.sort((a, b) => a - b);

  ans.push(houses.length);

  for (const houseCount of houses) {
    ans.push(houseCount);
  }

  return ans.join("\n");
}

function DFS(stack, map, moves, N) {
  let count = 1;

  while (stack.length) {
    const [curX, curY] = stack.pop();

    for (const [dx, dy] of moves) {
      const newX = curX + dx;
      const newY = curY + dy;
      const outOfBoundary = newX < 0 || newY < 0 || newX >= N || newY >= N;

      if (outOfBoundary || !map[newX][newY]) {
        continue;
      }

      map[newX][newY] = 0;
      stack.push([newX, newY]);
      count++;
    }
  }

  return count;
}

console.log(solution(input));
