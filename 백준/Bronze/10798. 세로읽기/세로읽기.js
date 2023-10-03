const { log } = require('console');
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const array = input.map((v)=> v.split(''));
const N = array.length;

let maxRow = 0;
array.forEach((v)=>{
  maxRow = v.length > maxRow ? v.length : maxRow;
});

let ans = "";
for (let i = 0; i < maxRow; i++) {
  for (let j = 0; j < N; j++) {
    ans += array[j][i] || '';
  }
}

log(ans);