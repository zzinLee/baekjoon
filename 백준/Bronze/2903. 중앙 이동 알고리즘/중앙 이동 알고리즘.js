const { log } = require('console');
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input[0]

function F(n) {
  if (n === 1)
    return 3;
  return 2*F(n-1)-1;
}

log(F(n) ** 2)