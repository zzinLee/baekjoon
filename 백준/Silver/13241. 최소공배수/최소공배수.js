let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [a, b] = input[0].split(" ").map(Number);

function gcd(A, B) {
  if (B === 0) {
    return A;
  }

  return gcd(B, A % B);
}

function lcm(A, B) {
  return A * Math.floor(B/gcd(A, B));
}

function solution(A, B) {
  return (A > B) ? lcm(A, B) : lcm(B, A);
}

console.log(solution(a, b));
