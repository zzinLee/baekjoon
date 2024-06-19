const INPUT_PATH = "../inputs/1로만들기.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const num = Number(input[0]);

function solution(n) {
  const DP = [0, 0, 1, 1];

  if (DP.length > n) { return DP[n]; }

  for (let i = DP.length; i <= n; i++) {
    DP[i] = DP[i - 1] + 1;

    if (i % 3 === 0) {
      DP[i] = Math.min(DP[i], DP[i / 3] + 1);
    }

    if (i % 2 === 0) {
      DP[i] = Math.min(DP[i], DP[i / 2] + 1);
    }
  }

  return DP[n];
}

console.log(solution(num));
