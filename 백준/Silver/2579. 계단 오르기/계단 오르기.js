const INPUT_PATH = "../inputs/계단오르기.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();
const stairs = input.map(Number);

function solution(stairs) {
  const DP = new Array(stairs.length).fill(0);

  DP[0] = stairs[0];
  DP[1] = stairs[0] + stairs[1];
  DP[2] = Math.max(stairs[0], stairs[1]) + stairs[2];

  for (let i = 3; i < stairs.length; i++) {
    DP[i] = Math.max(DP[i - 2] + stairs[i], DP[i - 3] + stairs[i - 1] + stairs[i]);
  }

  return DP[stairs.length - 1];
}

console.log(solution(stairs));
