const { log } = require('console');
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [chess, ...pan] = input;
pan = pan.map((v) => v.split(''));
let [n, m] = chess.split(' ').map(Number);

let min = Infinity;

for (let row = 0; row + 8 <= n; row++){
  for (let col = 0; col + 8 <= m; col++){
    const iterPaint = countRepaint(row, col);
    min = iterPaint < min ? iterPaint : min;

  }
}

console.log(min);

function countRepaint(row, col) {
  const copy = copyArray(pan, row, col);
  let countB = 0;
  let countW = 0;

  for (let i = 0; i < 8 ; i++) {
    for (let j = 0; j < 8 ; j++) {
      if (i % 2 === j % 2) {
        if (copy[i][j] !== "B" ) {
          countB++;
        }
      } else {
        if (copy[i][j] !== "W"){
          countB++;
        }
      }
    }
  }

  for (let i = 0; i < 8 ; i++) {
    for (let j = 0; j < 8 ; j++) {
      if (i % 2 === j % 2) {
        if (copy[i][j] !== "W" ) {
          countW++;
        }
      } else {
        if (copy[i][j] !== "B"){
          countW++;
        }
      }
    }
  }


  return countB < countW ? countB : countW;
}


function copyArray(array, n, m) {
  const copy = new Array(8).fill(0).map((v) => new Array(8).fill(0));

  for (let i = 0; i < 8; i++) {
    for(let j = 0; j < 8; j++) {
      copy[i][j] = array[n + i][m + j];
    }
  }

  return copy;
}
