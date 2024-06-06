function solution(wallpaper) {
    const icons = [];
    let [minX, minY, maxX, maxY] = [Infinity, Infinity, -Infinity, -Infinity];
    
    for (let i = 0; i < wallpaper.length; i++) {
        for (let j = 0; j < wallpaper[0].length; j++) {
            if (wallpaper[i][j] === "#") {
                if (i < minX) {
                    minX = i;
                } else if (i > maxX) {
                    maxX = i;
                }
                
                if (j < minY) {
                    minY = j;
                } else if (j > maxY) {
                    maxY = j;
                }
            }
        }
    }
    
    if (maxX === -Infinity || maxY === -Infinity) {
        return [minX, minY, minX + 1, minY + 1];
    }
    
    return [minX, minY, maxX + 1, maxY + 1];
}