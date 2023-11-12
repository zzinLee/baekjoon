let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(origin, compare) {
  const n = origin.length;
  const m = compare.length;
  const arr = Array.from(Array(n + 1), () => Array(m + 1).fill(0));
  let max = -Infinity;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (origin[i - 1] === compare[j - 1]) {
        arr[i][j] = arr[i -   1][j - 1] + 1
      } else {
        arr[i][j] = 0;
      }

      if (arr[i][j] > max) {
        max = arr[i][j];
      }
    }
  }

  return max;
}

console.log(solution(input[0], input[1]));
