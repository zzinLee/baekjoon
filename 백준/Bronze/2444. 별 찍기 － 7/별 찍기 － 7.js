let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input[0];
let ans = "";

for (let i = 0; i < n ; i++) {
  for (let j = n-1-i; j > 0; j--){
    ans += " ";
  }
  for (let j = 0; j < 2 * i + 1; j++) {
    ans += '*';
  }
  ans += "\n";
}

for (let i = n-1 ; i > 0 ; i--) {
  for (let j = 0; j < n-i; j++) {
    ans += " ";
  }
  for (let j = 0; j < 2*i - 1 ; j++) {
    ans += '*';
  }
  ans += "\n";
}

console.log(ans);
