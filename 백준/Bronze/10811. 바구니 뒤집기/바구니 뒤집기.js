let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arr = [];
for (let i = 0; i < N; i++) { arr[i] = i+1; }

function change(start, end, mid) {
  for (let i = start; i < mid; i++) {
    const temp = arr[i];
    arr[i] = arr[end+start-i];
    arr[end+start-i] = temp;
  }
}

for (let i = 0; i < M; i++) {
  const[start, end] = input[i+1].split(' ').map((v)=> Number(v)-1);
  const odd = (end - start)%2 ? false : true;
  const mid = Math.floor((start + end)/2);
  if (odd) {
    change(start, end, mid);
  } else {
    change(start, end, mid+1);
  }
}

console.log(arr.join(' '));