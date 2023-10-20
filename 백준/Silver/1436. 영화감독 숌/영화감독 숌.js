let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input[0];
let i = 0;
let num = 665;

while (i < n) {
  num++;
  if (num.toString().includes("666")) {
    i++;
  }
}

console.log(num);