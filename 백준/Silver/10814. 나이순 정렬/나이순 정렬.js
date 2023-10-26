let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [_,...members] = input;
members = members.map(v => v.split(' ')).map(([number, name], order)=> [Number(number), name, order]);

members.sort((a, b) => {
  return a[0] === b[0] ? a[2] - b[2] : a[0] - b[0];
});

members = members.map(([age, name]) => [age, name]);

console.log(members.map((v) => v.join(" ")).join("\n"));
