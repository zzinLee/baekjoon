const { log } = require('console');
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, ...comps] = input.map(Number);
const residueComps = [25, 10, 5, 1];
let ans = "";

for (let i = 0; i < N ; i++) {
  if (ans) { ans += '\n';}
  let cents = comps[i];
  const residue = [];
  for (const residuecomp of residueComps) {
    residue.push(Math.floor(cents/residuecomp));
    cents %= residuecomp;
  }
  ans += residue.join(' ');
}

log(ans);