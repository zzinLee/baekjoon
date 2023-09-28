let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const arr = input.map(Number);
const obj = {};
let max = -Infinity;

for (let i = 0; i < 9; i++) {
  obj [arr[i]] = i+1;
  max = (arr[i] > max) ? arr[i] : max ;
}

console.log(max + "\n" + obj[max]);