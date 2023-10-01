let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const str = input[0].trim().split(' ');
if (str[0] === '') {
  console.log(0);
} else {
  console.log(str.length);
}