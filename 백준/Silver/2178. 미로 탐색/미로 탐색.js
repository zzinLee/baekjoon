let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  //input 가공
  const [a, ...b] = input;
  const [N, M]= a.split(" ").map(Number);

  //움직인 칸 수 기록 그래프
  const pathRecord = new Array(N).fill(0).map((v) => new Array(M).fill(null));
  
  //시작점 [0,0]과 첫 시작점은 1칸 움직인 것으로 취급.
  const start = [0, 0];
  pathRecord[0][0]  = 1;

  //움직일 수 있는 방향 (상, 하, 좌, 우)
  const moves = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    
  //다음에 움직일 좌표를 queue에 기록
  const queue = [start];

  //문제에서 주어진 로드맵. 움직일 수 있는 칸은 1 (true), 없는 칸은 0 (false)
  const roadmap = b.map((row) => row.split("").map((val) => {
    if (val === "1") return true;
    else return false;
  }));

  //다음 움직일 칸이 없을 때 까지 (queue.length === 0), 즉 끝점일 때
  while (queue.length) {
    const [curX, curY] = queue.shift();

    //끝 점이 아닌 점이 end로 주어졌을 때 바로 return
    if (curX === N - 1 && curY === M - 1) {
      return pathRecord[curX][curY];
    }

    for (const [dx, dy] of moves) {
      const newX = curX + dx;
      const newY = curY + dy;
      const isInBoundary = newX >= 0 && newX < N && newY >= 0 && newY < M;

      if (!isInBoundary || !roadmap[newX][newY]  || pathRecord[newX][newY] !== null) {
        continue;
      }

      queue.push([newX, newY]);
      roadmap[newX][newY] = false;
      pathRecord[newX][newY] = pathRecord[curX][curY] + 1;
    }
  }

  return pathRecord[N-1][M-1];
}

console.log(solution(input));


