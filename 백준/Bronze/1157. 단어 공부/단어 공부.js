const { log } = require('console');
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const string = input[0].toUpperCase().split('');
const obj = {};

for (const ch of string) {
  obj[ch] = (obj[ch] || 0) + 1;
}

const objects = Object.entries(obj).sort((a,b) => b[1] - a[1]);

if (objects.length === 1) {
  log(objects[0][0]);
} else if( objects[0][1] === objects[1][1]) {
  log('?');
} else {
  log(objects[0][0]);
}