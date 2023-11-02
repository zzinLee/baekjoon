let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const orders = input.map((v) => v.split(" "));
const n = orders.length;
const arr = [];
const ans = [];

for (let i = 1; i < n; i++) {
  const order = orders[i];

  stackFunc(order, arr, ans);
}

console.log(ans.join("\n"));

function stackFunc(order, array, ans) {
  const [todo, number] = order;

  switch (todo) {
    case "push":
      array.push(number);
      break;
    case "pop":
      if (array.length === 0) {
        ans.push(-1);
        return;
      }

      ans.push(array.pop());
      break;
    case "size":
      ans.push(array.length);
      break;
    case "empty":
      if (array.length === 0) {
        ans.push(1);
      } else {
        ans.push(0);
      }
      break;
    case "top":
      if (array.length === 0) {
        ans.push(-1);
        return;
      }

      ans.push(array[array.length - 1]);
      break;
  }
}
