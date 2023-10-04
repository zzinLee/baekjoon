const { log } = require('console');
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [number, form] = input[0].split(' ').map(Number);
let num = number;
let residue = 0;
let i = 0;
let ans = '';

const format = {
  0: '0', 1: '1', 2: '2', 3: '3', 4: '4',
  5: '5', 6: '6', 7: '7', 8: '8', 9: '9',
  10: 'A', 11: 'B', 12: 'C', 13: 'D', 14: 'E',
  15: 'F', 16: 'G', 17: 'H', 18: 'I', 19: 'J',
  20: 'K', 21: 'L', 22: 'M', 23: 'N', 24: 'O',
  25: 'P', 26: 'Q', 27: 'R', 28: 'S', 29: 'T',
  30 : 'U', 31: 'V', 32: 'W', 33: 'X', 34: 'Y',
  35: 'Z',
};

while (num) {
  residue = num%form;
  num = Math.floor(num/form);
  ans = `${format[residue]}${ans}`
}

log(ans);