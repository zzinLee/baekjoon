let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [s, t] = input;

function solution(s, t) {
  const LCM = lcm(s.length, t.length);
  const repeatS = LCM/s.length;
  const repeatT = LCM/t.length;
  const [str1, str2] = [s.repeat(repeatS), t.repeat(repeatT)];

  return (str1 === str2) ? 1 : 0;
}

function gcd(num1, num2) {
  const [a, b] = (num1 > num2) ? [num1, num2] : [num2, num1];

  return (b === 0) ? a : gcd(b, a % b);
}

function lcm(num1, num2) {
  return num1 * num2 / gcd(num1, num2);
}

console.log(solution(s, t));
