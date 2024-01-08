let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [LAN, ...inputs] = input;
  const [K, N] = LAN.split(" ").map(Number);
  const lengths = inputs.map(Number);
  const max = Math.max(...lengths);

  const results = [];

  binarySearch(0, max, lengths, N, results);

  return results[results.length - 1];
}

function binarySearch(start, end, arr, N, results) {
  if (start > end) {
    return;
  }

  let divisorLength = Math.floor((end + start) / 2);

  const total = arr
		.map((v) => Math.floor(v / divisorLength))
    .reduce((a, b) => a + b, 0);

  if (total < N) {
    binarySearch(start, divisorLength - 1, arr, N, results);
  } else {
    results.push(divisorLength);
    binarySearch(divisorLength + 1, end, arr, N, results);
  }
}

console.log(solution(input));