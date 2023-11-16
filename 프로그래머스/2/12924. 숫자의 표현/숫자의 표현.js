function solution(n) {
    let count = 0;
    
    for (let i = 1; i < n; i++) {
        if (i % 2 === 1 && n % i === 0) {
            count++;
        }
    }
    
    return n % 2 ? count + 1: count;
}
