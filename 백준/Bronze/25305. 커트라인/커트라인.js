let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, k] = input[0].split(' ').map(Number);
const scores = input[1].split(' ').map(Number);

function getCutline (array, k) {
  const sorted = array.sort((a, b) => b - a);
  return sorted[k - 1];
}

console.log(getCutline(scores, k));