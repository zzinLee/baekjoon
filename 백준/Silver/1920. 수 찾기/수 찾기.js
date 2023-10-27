let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const ref = input[1].split(" ").map(Number).sort((a, b)=> a - b);
const org = input[3].split(" ").map(Number);
const ans = [];

for (const number of org) {
  ans.push(binarySearch(ref, number));
}

console.log(ans.join("\n"));

function binarySearch(reference, num) {
  let startIndex = 0;
  let lastIndex = ref.length - 1;
  let midIndex;

  while (startIndex <= lastIndex) {
    midIndex = Math.floor((startIndex + lastIndex) / 2);

    if (num === reference[midIndex]) {
      return 1;
    }

    if (num > reference[midIndex]) {
      startIndex = midIndex + 1;
    } else {
      lastIndex = midIndex - 1;
    }
  }

  return 0;
}