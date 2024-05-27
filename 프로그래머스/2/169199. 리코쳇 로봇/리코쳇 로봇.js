function solution(board) {
    let ans = Infinity;
    const n = board.length;
    const m = board[0].length;
    const movesX = [-1, 1, 0, 0];
    const movesY = [0, 0, -1, 1];
    const visited = board.map((row) => new Array(row.length).fill(false));
    let start, end;
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] === "R") {
                start = [i, j];
            } else if (board[i][j] === "G") {
                end = [i, j];
            }
        }
    }
    
    bfs();
    
    function bfs() {
        const q = [];
        
        q.push([start[0], start[1], 0]);
        
        while (q.length) {
            const [x, y, count] = q.shift();
            
            if (x === end[0] && y === end[1]) {
                ans = Math.min(ans, count);
            }
            
            visited[x][y] = true;
            
            for (let i = 0; i < 4; i++) {
              const [dx, dy] = [movesX[i], movesY[i]];
              let [newX, newY] = [x + dx, y + dy];

              if (newX < 0 || newY < 0 || newX >= n || newY >= m || board[newX][newY] === "D") {
                continue;
              }

              while (true) {
                newX += dx;
                newY += dy;
                
                if (newX < 0 || newY < 0 || newX >= n || newY >= m || board[newX][newY] === "D") {
                  newX -= dx;
                  newY -= dy;

                  break;
                }
              }

                if (visited[newX][newY]) {
                    continue;
                }
                
                q.push([newX, newY, count + 1]);
                visited[newX][newY] = true;     
            }
        }
    }
    
    return ans === Infinity ? -1 : ans;
}
