let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  //input 가공
  const [a, _, ...c] = input;
  const computers = Number(a);
  const connectedPairs = c.map((val) => val.split(" ").map((val) => Number(val) - 1));
  const connectGraph = new Array(computers).fill(0).map(() => new Array(computers).fill(0));
  const zombieComputers = new Set();

  //연결된 컴퓨터는 1로, 아니면 0으로 나타내는 그래프 작성
  for (const [c1, c2] of connectedPairs) {
    connectGraph[c1][c2] = 1;
    connectGraph[c2][c1] = 1;
  }

  //1번 컴퓨터(0)를 시작으로 감염
  const start = 0;
  const queue = [start];
  zombieComputers.add(start);

  //1번 컴퓨터 제외하고 감염된 컴퓨터를 센다.
  let zombies = 0;

  while (queue.length) {
    const zombieComputer = queue.shift();

    connectGraph[zombieComputer].forEach((connectionOn, connectedComputer) => {
      //좀비 컴퓨터에 연결되었는지, connectionOn === 1
      //좀비 컴퓨터목록에 없는지, !zombieComputers.has(connectedComputer)
      if (connectionOn === 1 && !zombieComputers.has(connectedComputer)) {
        zombies++;

        //다음으로 확인 할 컴퓨터
        queue.push(connectedComputer);

        //좀비 컴퓨터 목록 zombieComputers에 추가
        zombieComputers.add(connectedComputer);

        //연결 관계 정리
        connectGraph[zombieComputer][connectedComputer] = 0;
        connectGraph[connectedComputer][zombieComputer] = 0;
      }
    });
  }

  return zombies;
}

console.log(solution(input));
