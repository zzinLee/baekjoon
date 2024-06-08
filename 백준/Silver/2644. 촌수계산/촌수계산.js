const INPUT_PATH = "../inputs/촌수계산.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const total = Number(input.shift());
const [start, target] = input.shift().split(" ").map(Number);
const relations = Number(input.shift());
const graph = input.map((relation) => relation.split(" ").map(Number));

function solution(graph, start, target) {
  const childrenMap = new Map(); //부모: 자식들
  const parentMap = new Map(); //자식: 부모
  const visited = new Set();

  for (const [parent, child] of graph) {
    if (childrenMap.has(parent)) {
      const childrens = childrenMap.get(parent);
      childrens.push(child);
    } else {
      childrenMap.set(parent, [child]);
    }

    if (!parentMap.has(child)) {
      parentMap.set(child, parent);
    }
  }

  const q = [[start, 0]];

  while (q.length) {
    const [cur, count] = q.shift();

    if (cur === target) {
      return count;
    }

    if (visited.has(cur)) {
      continue;
    }

    if (parentMap.has(cur)) {
      q.push([parentMap.get(cur), count + 1]);
    }

    if (childrenMap.has(cur)) {
      const childrens = childrenMap.get(cur).map((child) => [child, count + 1]);

      q.push(...childrens);
    }

    visited.add(cur);
  }

  return -1;
}

console.log(solution(graph, start, target));
