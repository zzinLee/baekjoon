const { log } = require('console');
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const arr = input.map(v => v.split(' ').map(Number));
let ans = [];


for (const [first, second] of arr) {
  if (first === second) {
    break;
  }
  if (second % first === 0) {
    ans.push("factor");
  } else if (first % second === 0) {
    ans.push("multiple");
  } else {
    ans.push("neither");
  }
}

log(ans.join('\n'));