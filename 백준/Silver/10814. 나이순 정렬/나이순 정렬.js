let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

/**
 * Timsort는 안정정렬을 보장함.
 */

let [_,...members] = input;
members = members.map(v => v.split(' ')).map(([number, name])=> [+number, name]);

members.sort((a, b) => a[0] - b[0]);

members = members.map(([age, name]) => `${age} ${name}`);

console.log(members.join("\n"));
