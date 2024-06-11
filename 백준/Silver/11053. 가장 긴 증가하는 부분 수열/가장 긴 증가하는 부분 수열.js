const INPUT_PATH = "../inputs/가장긴증가하는부분수열.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input[1].split(" ").map(Number);

function solution(numbers) {
  const indexLen = new Array(numbers.length).fill(1);

  for (let i = 1; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      if (numbers[j] < numbers[i]) {
        indexLen[i] = Math.max(indexLen[j] + 1, indexLen[i]);
      }
    }
  }

  return Math.max(...indexLen);
}

console.log(solution(arr));
