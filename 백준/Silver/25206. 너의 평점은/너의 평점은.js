const { log } = require('console');
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const gradeArray = input.map((v)=> v.split(' '));
const score = {
  'A+': 4.5,
  'A0': 4.0,
  'B+': 3.5,
  'B0': 3.0,
  'C+': 2.5,
  'C0': 2.0,
  'D+': 1.5,
  'D0': 1.0,
  'F': 0.0,
};
let scoresSum = 0;
let creditSum = 0;

for (const subject of gradeArray) {
  const [_, credit, grade] = subject;
  if (grade === 'P')
    continue;
  scoresSum += (+credit) * score[grade];
  creditSum += (+credit);
}

log(scoresSum/creditSum);