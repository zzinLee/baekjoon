const INPUT_PATH = "../inputs/과자나눠주기.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [M, N] = input[0].split(" ").map(Number);
const snackLengths = input[1].split(" ").map(Number);

function solution(M, N, snacks) {
  snacks.sort((a, b) => a - b);

  let maxLength = 0;
  let start = 0;
  let end = snacks[N - 1];

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    let 조카 = 0;

    for (const snackLength of snacks) {
      조카 += Math.floor((snackLength / mid));
    }

    if (조카 >= M) {
      start = mid + 1;
      maxLength = mid;
    } else {
      end = mid - 1;
    }
  }

  return maxLength || 0;
}

console.log(solution(M, N, snackLengths));
