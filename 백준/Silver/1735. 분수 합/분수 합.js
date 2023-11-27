let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [a, b] = input.map((v) => v.split(' ').map(Number));

function solution(a, b) {
  const [numeA, denoA] = a;
  const [numeB, denoB] = b;

  let deno = denoA * denoB;
  let nume = denoA * numeB + denoB * numeA;
  const GCD = gcd(nume, deno);

  if (GCD !== 1) {
    deno /= GCD;
    nume /= GCD;
  }

  return `${nume} ${deno}`
}

console.log(solution(a, b));

function gcd(n1, n2) {
  const [a, b] = n1 > n2 ? [n1, n2] : [n2, n1];

  return (b === 0) ? a : gcd(b, a % b);
}
