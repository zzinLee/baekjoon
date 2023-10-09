const { log } = require('console');
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [x, y, z] = input[0].split(' ').map(Number).sort((a, b)=> b - a);

while (x >= y + z) {
  if (x - 1 > 0) {
    x--;
  }
}

log(x + y + z);