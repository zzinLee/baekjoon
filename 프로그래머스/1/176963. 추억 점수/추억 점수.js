function solution(name, yearning, photo) {
    const yearnMap = new Map();
    const ans = [];
    
    for (let i = 0; i < name.length; i++) {
        yearnMap.set(name[i], yearning[i]);
    }

    for (const jpg of photo) {
        const sum = jpg.reduce((acc, cur) => {
            if (!yearnMap.has(cur)) {
                return acc;
            } else {
                return acc + yearnMap.get(cur);
            }
        }, 0);
        
        ans.push(sum);
    }
    
    return ans;
}