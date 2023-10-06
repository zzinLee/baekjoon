const { log } = require('console');
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);

function calcFactors(N) {
  let i = 1;
  const factors = [];
  while (i <= N) {
    if (N % i === 0) {
      factors.push(i);
    }
    i++;
  }
  return factors; //숫자가 작은 순서대로 뱉을 것
}

const factors = calcFactors(N);

if (factors.length < K) {
  log(0);
  return;
} else {
  log(factors[K-1]);
}