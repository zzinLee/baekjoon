let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(arrayInput) {
  const input = arrayInput[0];
  const brackets = [];

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "<") {
      brackets.push([i]);
    }

    if (input[i] === ">") {
      brackets[brackets.length - 1].push(i);
    }
  }

  let total = "";
  let startIndex = 0;

  for (const [start, end] of brackets) {
    if (startIndex < start) {
      total += input.slice(startIndex, start).split(" ").map((str) => str.split("").reverse().join("")).join(" ");
    }

    total += input.slice(start, end + 1);

    startIndex = end + 1;
  }

  if (startIndex < input.length) {
    total += input.slice(startIndex, input.length).split(" ").map((str) => str.split("").reverse().join("")).join(" ");
  }

  return total;
}

console.log(solution(input));
