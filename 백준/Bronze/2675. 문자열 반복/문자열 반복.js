let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

for (let i = 1; i <= input[0]; i++) {
  const [R, string] = input[i].split(' ');

  let ans = '';
  const stringArray = string.split('');
  for (const str of stringArray) {
    for (let j = 0; j < R; j++) {
      ans += str;
    }
  }
  console.log(ans);
}