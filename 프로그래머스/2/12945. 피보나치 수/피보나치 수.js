function solution(n) {
    const fibo = fiboCall();

    return fibo(n)%1234567;
}

function fiboCall() {
    const cache = [0, 1];

    return function (n) {
        if (cache.length > n) {
            return cache[n];
        }
        
        while (cache.length <= n) {
            const current = cache.length;
            cache[current] = cache[current - 1] % 1234567  + cache[current - 2] % 1234567;
        }
        
        return cache[n];
    };
}