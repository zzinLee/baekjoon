let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [participantCards, controlCards] = [input[1].split(" ").map(Number), input[3].split(" ").map(Number)];

function solution(participants, controls) {
  const [n, m] = [participants.length, controls.length];
  const cards = new Map();

  participants.forEach((number) => {
    if (cards.has(number)) {
      cards.set(number, cards.get(number) + 1);
    } else {
      cards.set(number, 1);
    }
  });

  const ans = controlCards.map((num) => cards.get(num) || 0);

  return ans.join(" ");
}

console.log(solution(participantCards, controlCards));
