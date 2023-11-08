let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [_, ...testcases] = input;
testcases = testcases.map((value) => value.split(' ').map(Number));

function 최대공약수 (A, B) {
  let [a, b] = (A > B)  ? [A, B] : [B, A];

  if (b === 0) {
    return a;
  }

  return 최대공약수(b, a%b);
}

function 최소공배수(A, B) {
  const divisor = 최대공약수(A, B);
  return A * Math.floor(B/divisor);
}

for (const test of testcases) {
  const [a, b] = test;
  console.log(최소공배수(a, b));
}
