let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [testcaseN, ...numbers] = input.map(Number);

function fibo (nth) {
  const cache = [[1, 0], [0, 1]];

  if (nth < cache.length) {
    return cache[nth].join(" ");
  }

  let current = cache.length;

  while(current <= nth) {
    const prev1 = cache[current - 1];
    const prev2 = cache[current - 2];
    cache.push([prev1[0] + prev2[0], prev1[1] + prev2[1]]);
    current = current + 1;
  }

  return cache[current - 1].join(" ");
}

function solution(n, numbers) {
  let ans = [];

  for (let i = 0; i < n; i++) {
    ans.push(fibo(numbers[i]));
  }

  return ans.join("\n");
}

console.log(solution(testcaseN, numbers));
