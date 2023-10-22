let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const arr = input.map(Number);

function getAverage(array) {
  const sum = array.reduce((a, b) => a + b, 0);
  const n = array.length;

  return sum/n;
}

function getCentralValue(array) {
  const sorted = array.sort((a, b) => a - b);
  return sorted[2];
}

console.log(getAverage(arr) + "\n" + getCentralValue(arr));