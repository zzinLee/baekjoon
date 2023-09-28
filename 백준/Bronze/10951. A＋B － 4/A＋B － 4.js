let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = input.length;
for (let i = 0; i < n; i++) {
  const [a,b] = input[i].split(' ').map(Number);
  console.log(a+b);
}