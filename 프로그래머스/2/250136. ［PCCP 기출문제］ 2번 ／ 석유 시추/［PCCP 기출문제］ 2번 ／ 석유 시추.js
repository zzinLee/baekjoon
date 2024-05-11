function solution(land) {
    const n = land.length;
    const m = land[0].length;
    const VISIT = "VISITED";
    const visited = land.map((row) => new Array(row.length).fill(0));
    const moveX = [-1, 1, 0, 0];
    const moveY = [0, 0, -1, 1];
    const oilAreaAndCoords = {};
    const q = [];
    const oilAreaByCoords = {};
    
    for (let x = 0; x < n; x++) {
        for (let y = 0; y < m; y++) {
            if (visited[x][y] === VISIT) continue;
            
            visited[x][y] = VISIT;
            
            if (land[x][y] === 1) {
                q.push([x, y]);
                
                let oilArea = 0;
                const oilCoords = new Set();
                
                while (q.length) {
                    const [oilX, oilY] = q.pop();
                    
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
                            
                            if (isOutOfBoundary || visited[movedX][movedY] === VISIT) continue;
                            
                            visited[movedX][movedY] = VISIT;
                            
                            if (land[movedX][movedY] === 1) {
                                q.push([movedX, movedY]);
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
    
    let max = -Infinity;
    
    for (const area of Object.values(oilAreaByCoords)) {
        if (max < area) {
            max = area;
        }
    }
    
    return max;
}
