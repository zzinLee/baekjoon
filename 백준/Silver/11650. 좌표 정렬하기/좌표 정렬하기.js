let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [N, ...dots] = input;
dots = dots.map((dot) => dot.split(' ').map(Number));

dots.sort(([Ax, Ay],[Bx, By]) => {
  return (Ax === Bx) ? Ay - By : Ax - Bx;
})

console.log(dots.map((([x, y]) => `${x} ${y}`)).join("\n"));
