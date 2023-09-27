let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = input[0];
let answer = "";

for (let i = 1; i <= n ; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  answer += (a + b) + '\n';
}
console.log(answer);