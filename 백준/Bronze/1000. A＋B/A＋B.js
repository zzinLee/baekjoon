const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './index.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0].split(' ').map(i=> +i);

function solution(a,b){
    console.log(a+b);
}

solution(input[0],input[1]);