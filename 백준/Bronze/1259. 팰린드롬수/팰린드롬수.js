let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

input.pop();
const numbers = input;
const ans = [];

function wordtest (number) {
  const lastIndex = number.length - 1;
  const mid = Math.floor(number.length/2);

  if (number.length % 2) {
    for (let i = 0; i < mid; i++) {
      if (number[i] !== number[lastIndex - i]) {
        return "no";
      }
    }
  } else {
    for (let i = 0; i <= mid; i++) {
      if (number[i] !== number[lastIndex - i]) {
        return "no";
      }
    }
  }

  return "yes";
}

for (const number of numbers) {
  ans.push(wordtest(number));
}

console.log(ans.join("\n"));