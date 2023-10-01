let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [a, b] = input[0].split(' ');
const aReversed = Number(a.split('').reverse().join(''));
const bReversed = Number(b.split('').reverse().join(''));

if (aReversed > bReversed) {
  console.log(aReversed);
} else {
  console.log(bReversed);
}