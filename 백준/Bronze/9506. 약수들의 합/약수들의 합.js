const { log } = require('console');
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function calcFactors(n) {
  const arr = [1];
  let quotient = 0;

  for (let i = 2; ( i <= n && !arr.includes(i) ); i++) {
    if (n % i === 0) {
      quotient = Math.floor(n / i);
      if (i === quotient) {
        arr.push(i);
      } else {
        arr.push(i, quotient);
      }
    }
  }

  arr.sort((a, b) => a - b);
  return arr;
}

const numbers = input.map(Number);
const ans = [];

for (const number of numbers) {
  if (number === -1)
    break;

  const factors = calcFactors(number);
  const total = factors.reduce((a, b) => a + b, 0)

  if (number === total) {
    ans.push(`${number} = ${factors.join(' + ')}`);
  } else {
    ans.push(`${number} is NOT perfect.`);
  }
}

log(ans.join(" \n"));