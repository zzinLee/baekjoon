let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let answer = "int";
const n = Math.floor(input.map(Number)/4);

for (let i = 0; i < n; i++) {
  answer = "long "+ answer;
}
console.log(answer);