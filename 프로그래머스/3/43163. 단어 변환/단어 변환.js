const isChangable = (word, changeWord) => {
    let diffCount = 0;
        
    for (let i = 0; i < word.length; i++) {
        if (word[i] !== changeWord[i]) {
            diffCount++;
        }
    }

    return diffCount === 1;
};

function solution(begin, target, words) {
    const visited = { [begin] : 0 };
    const q = [begin];
    
    while (q.length) {
        const cur = q.shift();
        
        if (cur === target) break;
        
        for (const word of words) {
            if (!visited[word] && isChangable(word, cur)) {
                visited[word] = visited[cur] + 1;
                
                q.push(word);
            }
        }
    }
    
    return visited[target] ? visited[target] : 0;
}