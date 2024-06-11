const INPUT_PATH = "../inputs/가장긴증가하는부분수열.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input[1].split(" ").map(Number);

function solution(numbers) {
  const DP = [numbers[0]];
  let dpIndex = 0;

  for (let index = 1; index < numbers.length; index++) {
    if (DP[dpIndex] < numbers[index]) {
      DP.push(numbers[index]);

      dpIndex++;
    } else {
      let targetIndex = binarySearch(dpIndex, numbers[index]);

      DP[targetIndex] = numbers[index];
    }
  }

  function binarySearch(curIndex, target) {
    let [start, end] = [0, curIndex];

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);

      if (DP[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }

    return start;
  }

  return DP.length;
}

console.log(solution(arr));
