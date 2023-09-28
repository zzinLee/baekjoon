let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const basket = {};
for (let i = 0; i < n; i++) {
  basket[i+1] = i+1;
}


for (let i = 0; i < m; i++){
  const [a,b] = input[i+1].split(' ').map(Number);
  const temp = basket[a];
  basket[a] = basket[b];
  basket[b] = temp;
}

let ans = "";
for (const index in basket) {
  ans += basket[index] + " ";
}

console.log(ans);