let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, K] = input[0].split(" ").map(Number);
const str = [];
const stack = [];

for (let n = 1; n <= N; n++) {
  str.push(n);
}

let i = K - 1;
stack.push(...str.splice(i, 1));

while (str.length) {
  i = (i - 1 + K) % str.length;
  stack.push(...str.splice(i, 1));
}

console.log(`<${stack.join(", ")}>`);
