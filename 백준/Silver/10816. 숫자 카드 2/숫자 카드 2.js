let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [participantCards, controlCards] = [input[1].split(" ").map(Number), input[3].split(" ").map(Number)];

function solution(participants, controls) {
  const [n, m] = [participants.length, controls.length];
  const cards = {};
  const ans = [];

  for (const card of participants) {
    cards[card] = (cards[card] || 0) + 1;
  }

  for (const card of controls) {
    ans.push(cards[card] || 0);
  }

  return ans.join(" ");
}

console.log(solution(participantCards, controlCards));
