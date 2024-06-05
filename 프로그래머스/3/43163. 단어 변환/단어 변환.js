function solution(begin, target, words) {
    const canExchange = (origin, target) => {
        const len = origin.length;
        let differentWord = 0;
        
        for (let i = 0; i < len; i++) {
            if (origin[i] !== target[i]) {
                differentWord++;
            }
        }
        
        return differentWord === 1;
    };
    
    const mappingArray = (array) => {
        const set = new Set();
        
        array.forEach((element) => {
           set.add(element);
        });
        
        return set;
    };
    
    const records = mappingArray(words);
    
    if (!records.has(target)) return 0;
    
    const q = [[begin, 0]];
    
    while (q.length || records.size) {
        let [current, count] = q.shift();
        
        if (current === target) {
            return count;
        }
        
        for (const comp of records) {            
            if (canExchange(current, comp)) {
                q.push([comp, count + 1]);
                records.delete(comp);
            }
        }    
    }
    
    return changeCount;
}