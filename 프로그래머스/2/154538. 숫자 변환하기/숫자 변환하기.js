function checkingArea(limit, index, y, DP) {
    if (limit <= y) {
        if (DP[limit] === - 1) {
            DP[limit] = DP[index] + 1;   
        } else {
            DP[limit] = Math.min(DP[limit], DP[index] + 1);
        }
   }
}

function solution(x, y, n) {
    //연산한 결과가 y 일 때 return
    const DP = new Array(y + 1).fill(-1);
    
    //초기값 설정
    //x일때 count 가 0
    DP[x] = 0;
    
    for (let i = x; i <= y; i++) {
        if (DP[i] === -1) {
            continue;
        }
        
        checkingArea(i + n, i, y, DP);
        checkingArea(i * 2, i, y, DP);
        checkingArea(i * 3, i, y, DP);
    }
    
    return DP[y];
}
