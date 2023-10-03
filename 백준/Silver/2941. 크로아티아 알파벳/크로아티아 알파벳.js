const { log } = require('console');
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let string = input[0];
string = string
.replaceAll("c=", "X")
.replaceAll("c-", "X")
.replaceAll("dz=", "X")
.replaceAll("d-", "X")
.replaceAll("lj", "X")
.replaceAll("nj", "X")
.replaceAll("z=", "X")
.replaceAll("s=", "X")
console.log(string.length);