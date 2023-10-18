const { log } = require('console');
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [cards, max] = input[0].split(' ').map(Number);
const cardsDeck = input[1].split(' ').map(Number);

function solution (max, n, cardsdeck) {
  let start, mid, end;
  let sum;
  let result;

  for (let i = 0; i < n - 2; i++) {
    start = cardsdeck[i];
    for (let j = i + 1; j < n - 1; j++) {
      mid = cardsdeck[j];
      for (let k = j + 1; k < n; k++) {
        end = cardsdeck[k];
        sum = start + mid + end;

        if (sum <= max) {
          result = (result > sum) ? result : sum;
        }
      }
    }
  }

  return result;
}

log(solution(max, cards, cardsDeck));
