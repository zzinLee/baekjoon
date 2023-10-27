let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [num1,num2] = input[0].split(' ').map(Number);
const divisors = [];
let divisor = 2;

while (divisor <= num1 || divisor <= num2) {
  while (num1 % divisor === 0 && num2 % divisor === 0) {
    divisors.push(divisor);
    num1 /= divisor;
    num2 /= divisor;
  }

  divisor++;
}

const maxDivisor = divisors.reduce((a, b) => a * b, 1);
const minMultiple = maxDivisor * num1 * num2;
console.log(maxDivisor + "\n" + minMultiple);
