const { log } = require('console');
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, ...words] = input;
let groupcheck = 0;

function check(word) {
  let origin = word;
  const obj = {};
  for(const ch of word) {
    obj[ch] = (obj[ch] || 0) + 1;
  }

  for(const ch in obj) {
    if (obj[ch] > 1) {
      let string = new Array(obj[ch]).fill(ch).join('');
      origin = origin.replace(string, '');

      if (origin.includes(ch))
        return false;
    }
  }
  return true;
}

for (const word of words) {
  if (check(word)) {
    groupcheck++;
  }
}

log(groupcheck);
