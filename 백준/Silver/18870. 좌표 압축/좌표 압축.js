let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input[0];
const dots = input[1].split(' ').map(Number);
const zipDots = [];

const set = [...new Set(dots)].sort((a, b) => a - b);

for (const dot of dots) {
  /**
   * binarySesarch
   * set : sorted Array
   * dot : search value
   * returns: index;
   */
  zipDots.push(binarySearch(set, dot));
}

console.log(zipDots.join(" "));

function binarySearch(set, dot) {
  let first = 0;
  let last = set.length - 1;

  while (first <= last) {
    let index = Math.floor((last + first) / 2);

    if (dot === set[index]) {
      return index;
    }

    if (dot > set[index]) {
      first = index + 1;
    } else {
      last = index - 1;
    }
  }

  return -1;
}
