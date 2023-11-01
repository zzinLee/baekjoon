let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [a, b, c] = input.map(Number);
const result = (a * b * c).toString().split("");
const obj = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
};


for (const ch of result) {
  obj[ch]++;
}

console.log(Object.values(obj).join("\n"));