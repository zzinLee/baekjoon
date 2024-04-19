function solution(prices) {
    const arr = new Array(prices.length).fill(0);
    
    for (let i = 0; i < prices.length - 1; i++) {
        const current = prices[i];
        
        for (let j = i + 1; j < prices.length; j++) {
            const next = prices[j];
            
            if (current <= next) {
                arr[i]++;
            } else {
                arr[i]++;
                
                break;
            }
        }
    }
    
    return arr;
}

