let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [_, numbers] = input;
console.log(numbers.split('').map(Number).reduce((a,b)=> a + b, 0));