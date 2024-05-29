function solution(n, computers) {
    let link = 0;
    const checkedComputers = new Array(n).fill(false);
    
    for (let i = 0; i < n; i++) {
        if (!checkedComputers[i]) {
            DFS(i, n, computers, checkedComputers);
            
            link++;
        }
    }
    
    return link;
}

function DFS(current, n, computers, checkedComputers) {
    checkedComputers[current] = true;
    
    for (let i = 0; i < n; i++) {
        if (!checkedComputers[i] && computers[current][i]) {
            DFS(i, n, computers, checkedComputers);
        }
    }
}

