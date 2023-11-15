function solution(n) {
    const maxSearchNumber = max(n);
    let count = 1;
    
    for (let i = 2; i <= maxSearchNumber; i++) {
        if (i % 2 === 0 && (n + (i/2)) % i === 0) {
            count++;
        } else if (i % 2 !== 0 && n % i === 0) {
            count++;
        }
    }
    
    return count;
}


function max(n) {
    let k = Math.floor(Math.sqrt(2 * n));
    

    while (k * (k + 1) > 2 * n) {
        k--;
    }
    
    return k;
}