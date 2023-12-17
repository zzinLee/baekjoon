let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution (input) {
  let i = 0;
  const testCase = [];
  const counts = [];

  while (i < input.length) {
    if (input[i].split(" ").length === 3) {
      const [width, height, cabbages] = input[i].split(" ").map(Number);
      const cabbageMap = input.splice(i + 1, cabbages);
      testCase.push({ width, height, cabbages, cabbageMap });
    }
    i++;
  }


  for (const test of testCase) {
    const { width, height, cabbageMap } = test;
    const ground = new Array(height).fill(0).map((v) => new Array(width).fill(0));
    let count = 0;

    cabbageMap.forEach((v) => {
      const [w, h] = v.split(" ");
      ground[h][w] = 1;
    });

    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        if (ground[i][j] === 1) {
          ground[i][j] = 0;
          moveAround(ground, i, j, height, width);
          count++;
        }
      }
    }

    counts.push(count);
  }

  return counts.join("\n");
}

function moveAround(ground, i, j, h, w) {
  const move = [[-1, 0], [1, 0], [0, 1], [0, -1]];

  move.forEach(([dh, dw]) => {
    newI = i + dh;
    newJ = j + dw;

    if (newI >= 0 && newJ >= 0 && newI < h && newJ < w) {
      if (ground[newI][newJ] === 1) {
        ground[newI][newJ] = 0;
        moveAround(ground, newI, newJ, h, w);
      }
    }
  });
}

console.log(solution(input));
