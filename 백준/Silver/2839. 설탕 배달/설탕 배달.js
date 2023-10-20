let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const total = +input[0];

function solution (total) {
  const five = 5;
  const three = 3;
  let fiveBong = 0;
  let threeBong = 0;
  let rest = 0;

  fiveBong = Math.floor(total / five);
  rest = total % five;
  threeBong = Math.floor(rest / three);
  rest %= three;

  if (rest === 0) {
    return fiveBong + threeBong;
  } else {
    while(fiveBong) {
      fiveBong--;
      rest = total - five * fiveBong;
      threeBong = Math.floor(rest / three);        
      rest %= three;
        
      if (rest === 0) {
        return fiveBong + threeBong;
      }
    }
      
    return -1;
  }
}

console.log(solution(total));
