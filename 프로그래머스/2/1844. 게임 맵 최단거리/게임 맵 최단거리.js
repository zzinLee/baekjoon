function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    const moveX = [-1, 1, 0, 0];
    const moveY = [0, 0, -1, 1];
    const q = [[0, 0, 1]];
    maps[0][0] = 0;
    
    while (q.length) {
        const [x, y, count] = q.shift();
        
        if (x === n - 1 && y === m - 1) {
            return count;
        }
        
        for (let i = 0; i < 4; i++) {
            const nx = x + moveX[i];
            const ny = y + moveY[i];
            const isOut = nx < 0 || ny < 0 || nx >= n; ny >= m;
            
            if (isOut || !maps[nx][ny]) {
                continue;
            }
            
            maps[nx][ny] = 0;

            q.push([nx, ny, count + 1]);
        }
    }
    
    return -1;
}

