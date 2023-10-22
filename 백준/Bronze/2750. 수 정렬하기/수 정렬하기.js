let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, ...original] = input.map(Number);

function bubbleSort (array) {
  const sorted = [...new Set(array)];
  const length = sorted.length;

  for (let i = 1; i < length; i++) {
    for (let j = 0; j < length - i ; j++) {
      if (sorted[j] > sorted[j + 1]) {
        let temp = sorted[j];
        sorted[j] = sorted[j + 1];
        sorted[j + 1] = temp;
      }
    }
  }

  return sorted;
}

console.log(bubbleSort(original).join("\n"));
