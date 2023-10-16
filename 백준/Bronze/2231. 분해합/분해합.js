const { log } = require('console');
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input[0];
const coefficients = input[0].split('').map(Number);
const digit = coefficients.length;

const minN = n - (coefficients[0] + (digit - 1) * 9);

function solution(n, min) {
  for (let i = min; i < n ; i++) {
    if (digitGenerator(i) === n ) {
      return i;
    }
  }

  return 0;
}

log(solution(n, minN));

function digitGenerator (n) {
  return n.toString().split('').map(Number).reduce((a, b) => a + b, n);
}