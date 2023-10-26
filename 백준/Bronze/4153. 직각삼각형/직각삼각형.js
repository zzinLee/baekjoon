let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let triangles = input.map( v => v.split(' ').map(Number));
triangles.pop();

function rightAngle(arr) {
  const max = Math.max(...arr);
  const others = arr.filter((v) => v !== max).map((v) => v ** 2).reduce((a, b)=> a + b, 0);

  return (max ** 2 === others) ? "right" : "wrong";
}

triangles = triangles.map((v) => rightAngle(v));
console.log(triangles.join("\n"));
