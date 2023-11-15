function solution(n) {
    const maxSearchNumber = max(n);
    let count = 1;
    
    for (let i = 2; i <= maxSearchNumber; i++) {
        if (i % 2 === 0) {
            if ((n + (i/2)) % i === 0) {
                count++;
            }
        } else {
            if (n % i === 0) {
                count++;
            }
        }
    }
    
    return count;
}


function max(n) {
    let k = Math.ceil(n/2);

    while (k * (k + 1) > 2 * n) {
        k--;
    }
    
    return k;
}