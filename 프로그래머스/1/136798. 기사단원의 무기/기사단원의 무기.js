function calculateDivisor(n) {
    const divisors = new Set();
    
    for (let i = 1; i <= Math.floor(Math.sqrt(n)) ; i++) {
        if (n % i === 0) {
            divisors.add(i);
            divisors.add(n/i);
        }
    }
    
    return divisors.size;
}

function solution(number, limit, power) {
    const soldiers = Array.from({ length: number}, (v, i) => i + 1);
    const swords = soldiers.map((number) => {
        const originPower = calculateDivisor(number);
        
        return originPower > limit ? power : originPower;
    });
    
    return swords.reduce((acc, cur) => acc + cur, 0);
}
