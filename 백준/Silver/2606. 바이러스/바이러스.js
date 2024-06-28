const INPUT_PATH = "../inputs/바이러스.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const total = Number(input.shift());
input.shift();
const links = input.map((value) => value.split(" ").map(Number));

function solution(total, links) {
  const computers = new Array(total + 1).fill(0).map(() => new Set());

  for (const [start, end] of links) {
    computers[start].add(end);
    computers[end].add(start);
  }

  const virus = 1;
  const visited = new Set();

  let count = 0;
  const q = [virus];

  while (q.length) {
    const virusComputer = q.shift();

    visited.add(virusComputer);

    const connected = Array.from(computers[virusComputer]);

    for (const connectedComputer of connected) {
      if (!visited.has(connectedComputer)) {
        q.push(connectedComputer);
        visited.add(connectedComputer);
        count++;
      }
    }
  }

  return count;
}

console.log(solution(total, links));
