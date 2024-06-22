const INPUT_PATH = "../inputs/가장긴감소하는부분수열.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const numbers = input[1].split(" ").map(Number);

function f(nums) {
  const DP = new Array(nums.length).fill(1);

  for (let current = 1; current < nums.length; current++) {
    const currentValue = nums[current];

    for (let prev = 0; prev < current; prev++) {
      const previousValue = nums[prev];

      if (previousValue > currentValue) {
        DP[current] = Math.max(DP[prev] + 1, DP[current]);
      }
    }
  }
  
  DP.sort((a, b) => a - b);
    
  return DP.pop();
}

console.log(f(numbers));
