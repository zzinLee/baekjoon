const INPUT_PATH = "../inputs/1,2,3.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const testCaseNumbers = input.map(Number).slice(1);

function test(n) {
  if (n === 1) return 1;

  if (n === 2) return 2;

  if (n === 3) return 4;

  return test(n - 1) + test(n - 2) + test(n - 3);
}

function solution(tests) {
  const ans = [];

  for (const number of tests) {
    ans.push(test(number));
  }

  return ans.join("\n");
}

console.log(solution(testCaseNumbers));
