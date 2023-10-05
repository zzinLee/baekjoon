const { log } = require('console');
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [A, B, V] = input[0].split(" ").map(Number);

let least_day = Math.ceil((V-A)/(A-B));
log(least_day+1);
