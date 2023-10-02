let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const str = input[0];

function testStr (length, middle, str) {
  for (let i = 0; i < middle; i++) {
    if (str[i] !== str[length - 1 - i])
      return 0;
  }
  return 1;
}

console.log(testStr(str.length, Math.floor(str.length/2), str))
