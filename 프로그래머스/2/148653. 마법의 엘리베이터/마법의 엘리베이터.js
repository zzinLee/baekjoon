function solution(storey) {
    let result = 0;
    
    while (storey) {
        let cur = storey % 10;
        let next = (storey / 10) % 10;
        console.log(cur, next);
        
        if (cur > 5) {
            result += (10 - cur);
            storey += 10;
        } else if (cur === 5) {
            result += cur;
            storey += (next >= 5) ? 10 : 0;
        } else {
            result += cur;
        }
        
        storey = parseInt(storey/10);
    }
    
    return result;
}