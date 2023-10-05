const { log } = require('console');
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function start(n) {
  if(n === 1)
    return 1;
  if(n === 2)
    return 2;
  return 3*n*(n-3)+8;
}

const N = +input[0];
// let estim = Math.floor(Math.sqrt((N-8)/3));
let test = 1;
let ans;

while (true) {
  if ( (start(test) <= N) && (N < start(test + 1))) {
    ans = test;
    break;
  }
  test++;
}
log(ans);