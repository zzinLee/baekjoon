function solution(A, B) {
    const strA = A.split("");
    const maximum = strA.length;
    let pushCount = 0;
    
    while (pushCount < maximum) {
        if (strA.join("") === B) {
            return pushCount;
        }
        
        const ch = strA.pop();
        strA.unshift(ch);
        
        pushCount++;
    }
    
    return -1;
}