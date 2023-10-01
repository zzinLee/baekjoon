let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n,...strings] = input;

for (const str of strings) {
  console.log(str[0] + str[str.length-1]);
}