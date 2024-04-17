function solution(park, routes) {
    const [limitX, limitY] = [park.length, park[0].length];
    const visitedPark = park.map((str) => str.split(""));
    const availablePark = visitedPark.map((row) => {
       return row.map((value) => value === "O" || value === "S");
    });
    const [startX, startY] = findStartCoord(visitedPark);
    const direction = {
        "N": [-1, 0],
        "S": [1, 0],
        "W": [0, -1],
        "E": [0, 1],
    };  
    const routeStep = routes.map((str) => str.split(" "));
    let [curX, curY] = [startX, startY];
    
    routeStep.forEach(([dir, count]) => {
        const [dx, dy] = direction[dir];
        const [prevX, prevY] = [curX, curY];

        for (let i = 0; i < count; i++) {
            const [changedX, changedY] = [curX + dx, curY + dy];
            const isOutOfBoundary = 
              changedX < 0 || changedY < 0 || 
              changedX >= limitX || changedY >= limitY;
        
            if (isOutOfBoundary || !availablePark[changedX][changedY]) {
                curX = prevX;
                curY = prevY;

                break;
            }
            
            curX = changedX;
            curY = changedY;
        }
        console.log(curX, curY);
    });
    
    return [curX, curY];
}

function findStartCoord(arr) {
    const n = arr.length;
    const m = arr[0].length;
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (arr[i][j] === "S") {
                return [i, j];
            }
        }
    }
}
