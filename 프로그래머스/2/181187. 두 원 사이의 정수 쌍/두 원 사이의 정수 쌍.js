function solution(r1, r2) {
    const calculateOneside = (r1, r2) => {
        let count = 0; 
        
        for (let x = 0; x < r1; x++) {
            const small = Math.sqrt(r1*r1 - x*x);
            const big = Math.sqrt(r2*r2 - x*x);
            
            count += Math.floor(big) - Math.ceil(small) + 1;
        }
        
        for (let x = r1; x <= r2; x++) {
            const big = Math.sqrt(r2*r2 - x*x);
            count += Math.floor(big);
        }
        
        return count;
    };
    
    return 4 * calculateOneside(r1, r2);
}
