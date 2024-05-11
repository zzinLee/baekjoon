function solution(land) {
    const n = land.length;
    const m = land[0].length;
    
    //방문기록
    const VISIT = "VISITED";
    const visited = land.map((row) => new Array(row.length).fill(0));
    
    //DFS
    const moveX = [-1, 1, 0, 0];
    const moveY = [0, 0, -1, 1];
    const stack = [];
    
    //coord에 해당하는 oilArea
    const oilAreaByCoords = {};
    
    for (let x = 0; x < n; x++) {
        for (let y = 0; y < m; y++) {
            if (visited[x][y] === VISIT) continue;
            
            visited[x][y] = VISIT;
            
            if (land[x][y] === 1) {
                stack.push([x, y]);
                
                let oilArea = 0;
                const oilCoords = new Set();
                
                while (stack.length) {
                    const [oilX, oilY] = stack.pop();
                    
                    if (land[oilX][oilY] === 1) {
                        oilArea++;
                        oilCoords.add(oilY);
                        
                        for (let i = 0; i < 4; i++) {
                            const movedX = oilX + moveX[i];
                            const movedY = oilY + moveY[i];
                            const isOutOfBoundary = 
                                  movedX < 0 ||
                                  movedY < 0 ||
                                  movedX >= n ||
                                  movedY >= m;
                            
                            if (isOutOfBoundary ||
                                visited[movedX][movedY] === VISIT) continue;
                            
                            visited[movedX][movedY] = VISIT;
                            
                            if (land[movedX][movedY] === 1) {
                                stack.push([movedX, movedY]);
                            }
                        }
                    }
                }
                
                for (const sand of Array.from(oilCoords)) {
                    oilAreaByCoords[sand] = (oilAreaByCoords[sand] || 0) + oilArea;
                }
            }
        }
    }
    
    return Math.max(...Object.values(oilAreaByCoords));
}
