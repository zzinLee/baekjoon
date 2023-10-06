const { log } = require('console');
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

let input = +fs.readFileSync(filePath).toString();
let i = 2;

if (input === 1) return;

while (input) {
  if (i > input) break;
  if (input % i === 0) {
    log(i);
    input = input / i;
  } else {
    i++;
  }
}