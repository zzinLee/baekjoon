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

const [min, max] = input.map(Number);
let minPrime = 0;
let sum = 0;

for (let i = min; i <= max; i++) {
  if (isItPrime(i)) {
    if (!minPrime) minPrime = i;
    sum +=  i;
  }
}

if (!minPrime) {
  log(-1);
} else {
  log(sum + '\n' + minPrime);
}