let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [testcase, ...inputs] = input;
testcase = +testcase;
inputs = inputs.map((v) => v.split(" ").map(Number));

const tests = [];

for (let i = 0; i < inputs.length; i++) {
  if (inputs[i].length === 1) {
    tests.push(inputs.splice(i + 1, inputs[i]));
  }
}

function solution(testsArray) {
  const completedTest = [];

  for (let i = 0; i < testcase; i++) {
    const eachTest = testsArray[i];
    completedTest.push(testThis(eachTest));
  }

  return completedTest.join("\n");
}

function testThis(test) {
  let count = 1;

  test.sort((a, b) => {
    return a[0] - b[0];
  });

  let firstRanker = test[0];
  let firstCompareRank = firstRanker[1];

  for (let i = 1; i < test.length; i++) {
    const controlRanker = test[i];
    const controlCompareRank = controlRanker[1];

    if (firstCompareRank < controlCompareRank) {
      continue;
    } else {
      firstRanker = controlRanker;
      firstCompareRank = controlCompareRank;
      count++;
    }
  }

  return count;
}

console.log(solution(tests));
