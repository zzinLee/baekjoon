function solution(targets) {
    if (targets.length === 0) return 0;
    
    targets.sort((a, b) => b[0] - a[0]);
    
    console.log(targets);
    
    let checker = targets[0][0];
    let count = 1;
    
    for (let i = 1; i < targets.length; i++) {
        const [start, end] = targets[i];
        
        if (end <= checker) {
            count++;
            checker = start;
        }
    }
    
    return count;
}
