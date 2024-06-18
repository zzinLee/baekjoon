const INPUT_PATH = "../inputs/촌수계산.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input.shift());
const targets = input.shift().split(" ").map(Number);
const m = Number(input.shift());
const relations = input.map(rel => rel.split(" ").map(Number));

function solution(targets, relations) {
  const [target1, target2] = targets;
  const visited = new Set();
  const parentToChildren = new Map(); //부모는 자식 여러개
  const childrenToParent = new Map(); //자식은 부모하나

  for (const [parent, child] of relations) {
    childrenToParent.set(child, parent);

    if (parentToChildren.has(parent)) {
      const children = parentToChildren.get(parent);
      children.push(child);

      parentToChildren.set(parent, children);
    } else {
      parentToChildren.set(parent, [child]);
    }
  }

  //BFS순회
  const q = [[target1, 0]];

  while (q.length) {
    const [searchTarget, link] = q.shift();
    visited.add(searchTarget);

    if (searchTarget === target2) {
      return link;
    }

    if (parentToChildren.has(searchTarget)) {
      const childrenValues = parentToChildren.get(searchTarget);
      const children = [];

      for (const child of childrenValues) {
        if (!visited.has(child)) {
          children.push([child, link + 1]);
        }
      }

      q.push(...children);
    }

    if (childrenToParent.has(searchTarget)) {
      const parent = childrenToParent.get(searchTarget);

      if (!visited.has(parent)) {
        q.push([parent, link + 1]);
      }
    }
  }

  return -1;
}

console.log(solution(targets,relations));
