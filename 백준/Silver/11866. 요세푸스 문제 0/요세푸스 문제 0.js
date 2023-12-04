let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, K] = input[0].split(" ").map(Number);

function solution(N, K) {
  const array = new Array(N).fill(0).map((_, i) => i + 1);
  const answer = [];

  while (array.length) {
    let count = 1;

    while (count < K) {
      const data = array.shift();
      array.push(data);
      count++;
    }

    answer.push(array.shift());
  }

  return answer.join(", ");
}

console.log(`<${solution(N, K)}>`);
