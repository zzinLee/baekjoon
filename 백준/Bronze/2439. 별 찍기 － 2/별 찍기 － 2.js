let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input[0];
let ans = "";

for (let i = 1; i <= n; i++) { // 1,2,3,4,5
  for (let j = 0; j < n - i; j++) { //4 3 2 1
    ans += " ";
  }
  for (let j = 1; j <= i; j++) {
    ans += "*";
  }
  ans += "\n";
}

console.log(ans);