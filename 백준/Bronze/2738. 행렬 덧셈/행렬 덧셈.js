const { log } = require('console');
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [size, ...array] = input;
const [N, M] = size.split(' ').map(Number);
const B = array.splice(N).map((v) => v.split(' ').map(Number));
const A = array.map((v) => v.split(' ').map(Number));
const newArr = new Array(N).fill(0).map((v)=> v = new Array(M).fill(0));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    newArr[i][j] = A[i][j] + B[i][j];
  }
}

log(newArr.map(v => v.join(' ')).join(' '));