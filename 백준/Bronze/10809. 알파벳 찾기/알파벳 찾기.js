let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const alpha = new Array(26).fill(-1);
const arr = input[0].split('');

arr.forEach((v,i) => {
  const idx = v.charCodeAt()-97;
  if (alpha[idx] === -1) {
    alpha[idx] = i;
  }
})

console.log(alpha.join(' '));