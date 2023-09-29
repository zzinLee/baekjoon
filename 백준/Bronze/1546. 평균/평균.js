let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const subjects = Number(input[0]);
const scores = input[1].split(' ').map(Number);
const maxScore = Math.max(...scores);

const modifiedScores = scores.map((score)=> score / maxScore * 100);
const ans = (modifiedScores.reduce((prev, cur)=> prev + cur, 0)/subjects);
console.log(ans);