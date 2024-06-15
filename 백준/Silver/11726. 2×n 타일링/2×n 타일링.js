const INPUT_PATH = "../inputs/2×n타일링.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const number = Number(input[0]);

function solution() {
  const cached = [1, 2, 3];

  return function makeCache(n) {
    if (!cached[n]) {
      cached[n] = (makeCache(n - 1) + makeCache(n - 2))%10007;
    }

    return cached[n];
  };
}

const memoizedSolution = solution();

console.log(memoizedSolution(number - 1));
