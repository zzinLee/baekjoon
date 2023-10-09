const { log } = require('console');
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const samples = input.map((v)=> v.split(' ').map(Number));
const n = samples.length;

for (let i = 0; i < n - 1 ; i++) {
  trianlgeTest(samples[i]);
}


function trianlgeTest (sample) {
  const [x, y, z] = sample.sort((a, b)=>b-a);
  if (x >= y + z) {
    log("Invalid");
    return;
  }
  else {
    if (x === y && y === z) {
      log("Equilateral");
      return;
    } else if (x !== y && y !== z && x !== z) {
      log("Scalene");
      return;
    } else {
      log("Isosceles");
      return;
    }
  }
}