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
    const set = new Set();
    const answer = [];

    DFS(begin, 0, set);
    
    function DFS(current, count, visited) {
        if (current === target) {
            answer.push(count);
            
            return;
        }
        
        visited.add(current);

        for (let i = 0; i < words.length; i++) {
            if (!visited.has(words[i]) && isChangable(current, words[i])) {
                DFS(words[i], count + 1, visited);
            }
        }
    }
    
    return answer.length ? Math.min(...answer) : 0; 
}