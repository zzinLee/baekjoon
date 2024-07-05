const INPUT_PATH = "../inputs/시리얼번호.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [total, ...strings] = input;

function solution(str) {
  str.sort((a, b) => {
    if (a.length === b.length) {
      const aNumbers = a.split("").map(Number).reduce((acc, cur) => {
        return !isNaN(cur) ? acc + cur : acc;
      }, 0)
      const bNumbers = b.split("").map(Number).reduce((acc, cur) => {
        return !isNaN(cur) ? acc + cur : acc;
      }, 0);

      return aNumbers - bNumbers === 0 ? a.localeCompare(b) : aNumbers - bNumbers;
    }

    return a.length - b.length;
  });

  return str.join("\n");
}

console.log(solution(strings));