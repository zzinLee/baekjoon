let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const n = BigInt(input[0]);
  const fN = factorial(n);
  const stringN = String(fN);

  for (let i = stringN.length - 1; i >=0; i--) {
    if (stringN[i] !== "0") {
      return stringN.length - 1 - i;
    }
  }
}

function factorial(n) {
  if (n === 0n) {
    return 1n;
  }

  return factorial(BigInt(n)-BigInt(1)) * BigInt(n);
}

console.log(solution(input));