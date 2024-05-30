function solution(array, commands) {
    const ans = [];
    
    for (const [start, end, k] of commands) {
        const sorted = 
              array.slice(start - 1, end).sort((a, b) => a - b);
        
        ans.push(sorted[k-1]);
    }
    
    return ans;
}