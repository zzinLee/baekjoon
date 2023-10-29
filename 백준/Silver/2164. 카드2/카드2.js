let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');


class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  size() {
    return this.length;
  }


  push(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    this.tail = newNode;
    this.length++;
  }

  removeHead() {
    const item = this.head.data;

    if (this.size() !== 1) {
      this.head = this.head.next;
      this.head.prev = null;
    }

    this.length--;
    return item;
  }

}


const n = +input[0];

function solution(n) {
  const q = new Queue();

  for (let i = 1; i <= n; i++) {
    q.push(i);
  }

  while (q.size() > 1) {
    q.removeHead();
    q.push(q.removeHead());
  }

  return "" + q.removeHead();
}

console.log(solution(n));
