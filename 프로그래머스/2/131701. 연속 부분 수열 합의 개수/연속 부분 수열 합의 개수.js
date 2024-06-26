function solution(elements) {
    const set = new Set(elements);
    const len = elements.length;
    
    for (let n = 1; n < len; n++) {
        let start = 0;
        let end = start + n;
        const visited = new Set();
        
        while (!visited.has(start)) {
            visited.add(start);
            
            let sum = 0;
            end = start + n;

            for (let i = start; i <= end; i++) {
                if (i >= len) {
                    sum += elements[i % len]
                } else {
                    sum += elements[i];   
                }
            }
            
            set.add(sum);

            start++;
            
            start = start >= len ? start % (len - 1) : start;
        }
    }
    
    return set.size;
}