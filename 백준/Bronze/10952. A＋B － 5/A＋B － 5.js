let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let ans = "";
let i = 0;

while (true) {
  const [a,b] = input[i].split(' ').map(Number);
  i++;
  if (a === 0 && b === 0) break;
  ans += a + b + "\n";
}

console.log(ans);