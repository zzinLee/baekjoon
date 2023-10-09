const { log } = require('console');
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [n, ...balls] = input;
balls = balls.map((v)=> v.split(' ').map(Number));

let x_min = balls[0][0];
let x_max = balls[0][0];
let y_min = balls[0][1];
let y_max = balls[0][1];

if (n === 1) {
  log(0);
  return;
} else {
  for (const [x, y] of balls) {
    x_min = x_min > x ? x : x_min;
    x_max = x_max > x ? x_max : x;

    y_min = y_min > y ? y : y_min;
    y_max = y_max > y ? y_max: y;
  }

  let width = x_max - x_min;
  let height = y_max - y_min;

  log(width*height);
}