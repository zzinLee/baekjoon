function solution(k, tangerine) {
    const tangerMap = new Map();
    
    for (const tanger of tangerine) {
        if (tangerMap.has(tanger)) {
            tangerMap.set(tanger, tangerMap.get(tanger) + 1);
        } else {
            tangerMap.set(tanger, 1);
        }
    }
    
    const tangerArr = Array.from(tangerMap).sort((a, b) => b[1] - a[1]);
    let residue = k;
    let currentTangerines = 0;
    let result = 0;
    
    for (const [size, numbers] of tangerArr) {
        if (currentTangerines >= k) {
            break;
        }
        
        const currentAdd = Math.min(numbers, residue);
        
        currentTangerines += currentAdd;
        residue -= currentAdd;
        result++;
    }
    
    return result;
}