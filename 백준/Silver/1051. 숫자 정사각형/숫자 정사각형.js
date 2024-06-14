const INPUT_PATH = "../inputs/숫자정사각형.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input.slice(1).map((row) => row.split("").map(Number));

function solution(N, M, arr) {
  const maxX = N < M ? N : M;
  let x = maxX;

  while (x >= 0) {
    for (let i = 0; i + x < N; i++) {
      for (let j = 0; j + x < M; j++) {
        const isSameCorner =
          arr[i][j] === arr[i + x][j] &&
          arr[i][j + x] === arr[i + x][j + x] &&
          arr[i][j] === arr[i + x][j + x];

        if (isSameCorner) {
          return (x + 1) ** 2;
        }
      }
    }

    x--;
  }
}

console.log(solution(N, M, arr));
