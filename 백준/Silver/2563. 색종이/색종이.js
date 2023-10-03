const { log } = require('console');
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [n, ...positions] = input;
n = +n;
positions = positions.map((v) => v.split(' ').map(Number));
const papers = new Array(100).fill(0).map((n)=> n = new Array(100).fill(0));

function coloring([x, y]) {
  let count = 0;
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (papers[x+i][y+j]) {
        continue;
      } else {
        papers[x+i][y+j] = 1;
        count++;
      }
    }
  }
  return count;
}

let sum = 0;
for (const position of positions) {
  sum += coloring(position);
}
log(sum);
