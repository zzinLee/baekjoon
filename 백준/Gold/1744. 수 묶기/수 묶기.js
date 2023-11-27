let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input[0];
const [_, ...numbers] = input.map(Number);

function solution(numbers) {
  const plusStack = [];
  const minusStack = [];
  let zero = false;
  const plusLabel = "PLUS";
  const minusLabel = "MINUS";

  for (const number of numbers) {
    if (number > 0) {
      plusStack.push(number);
    } else if (number === 0) {
      zero = true;
    } else {
      minusStack.push(number);
    }
  }

  plusStack.sort((a, b) => b - a);
  minusStack.sort((a, b) => a - b);

  const plusSum = maxSum(plusStack, zero, plusLabel);
  const minusSum = maxSum(minusStack, zero, minusLabel);

  return plusSum + minusSum;
}

function maxSum(sorted, zero, label) {
  let sum = 0;
  const n = Math.floor(sorted.length / 2);
  const isOdd = sorted.length % 2 === 1;

  switch (label) {
    case "PLUS" : {
      for (let i = 0; i < n; i++) {
        const cur = sorted[2 * i];
        const next = sorted[2 * i + 1];

        if (cur + next > cur * next) {
          sum += (cur + next);
        } else {
          sum += (cur * next);
        }
      }

      if (isOdd) {
        sum += sorted[sorted.length - 1];
      }

      break;
    }

    case "MINUS": {
      for (let i = 0; i < n; i++) {
        sum += (sorted[2 * i] * sorted[2 * i + 1]);
      }

      if (isOdd && !zero) {
        sum += sorted[sorted.length - 1];
      }
      break;
    }
  }

  return sum;
}

console.log(solution(numbers));
