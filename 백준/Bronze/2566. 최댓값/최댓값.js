const { log } = require('console');
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const array = input.map((v)=> v.split(' ').map(Number));

let max = -1;
let max_row = -1;
let max_column = -1;
for (let i = 0; i < 9 ; i++) {
  for (let j = 0; j < 9; j++) {
    if (array[i][j] >= max) {
      max = array[i][j];
      max_row = i+1;
      max_column = j+1;
    }
  }
}

console.log(`${max}\n${max_row} ${max_column}`);