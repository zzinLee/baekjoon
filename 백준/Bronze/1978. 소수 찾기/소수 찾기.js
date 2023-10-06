const { log } = require('console');
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function isItPrime(n) {
  if (n === 1) return false;
  const rootN = Math.floor(Math.sqrt(n));
  let prime = true;
  for (let i = 2; i <= rootN ; i++) {
    if (n % i === 0) {
      prime = false;
    }
  }
  return prime;
}

const n = +input[0];
const arr = input[1].split(' ').map(Number);
let primeNumber = 0;

for (const num of arr) {
  if (isItPrime(num)) primeNumber++;
}

log(primeNumber);