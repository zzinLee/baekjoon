let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input[0];
const search = +input[2];
const array = input[1].split(' ').map(Number);
let count = 0;

for (let i = 0; i < n; i++) {
  if (array[i] === search) count++;
}

console.log(count);