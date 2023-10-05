const { log } = require('console');
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const k = +input[0];
const n = findLine(k);
const firstHang = n * (n - 1) / 2 + 1;
const index = k - firstHang;
const even = (n%2 === 0) ? true : false;

let x = 0;
let y = 0;
if (even) {//짝수 line rule
  x = 1;
  y = n;

  for (let i = 0; i < index; i++) {
    x++;
    y--;
  }
} else { //홀수 line rule
  x = n;
  y = 1;

  for (let i = 0; i < index ; i++) {
    x--;
    y++;
  }
}

log(`${x}/${y}`);




function findLine(n) {
  let i = 0;
  while(true) {
    if (((i * (i - 1) / 2) < n) && (n <= ((i + 1) * i / 2))) {
      return i;
    }
    i++;
  }
}