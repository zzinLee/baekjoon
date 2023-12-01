let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [_, ...inputs] = input;

function solution (teststrings) {
  const answer = [];

  for (const string of teststrings) {
    testVPS(string) ? answer.push("YES") : answer.push("NO");
  }

  return answer.join("\n");
}

function testVPS(origin) {
  const stacks = [];
  const string = [...origin];

  for (const str of string) {
    if (str === "(") {
      stacks.push(str);
    } else {
      stacks[stacks.length - 1] === "("
      ? stacks.pop()
      : stacks.push(str);
    }
  }

  return (stacks.length) ? false : true;
}

console.log(solution(inputs));
