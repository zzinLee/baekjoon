const INPUT_PATH = "../inputs/ATM.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const total = Number(input[0]);
const timeArray = input[1].split(" ").map((Number));

function solution(n, times) {
  times.sort((a, b) => a - b);
  const arr = [];

  for (let i = 0; i < times.length; i++) {
    if (i === 0) {
      arr.push(times[i]);
    } else {
      arr.push(times[i] + arr[i - 1]);
    }
  }

  return arr.reduce((a, b) => a + b, 0);
}

console.log(solution(total, timeArray));
