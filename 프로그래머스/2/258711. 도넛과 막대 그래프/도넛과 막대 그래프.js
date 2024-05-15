function solution(edges) {
    const nodeMap = new Map();
    const answer = [0, 0, 0, 0];
    
    for (const [from, to] of edges) {
        if (nodeMap.has(from)) {
            const [OUT, IN] = nodeMap.get(from);
            nodeMap.set(from, [OUT + 1, IN]);
        } else {
            nodeMap.set(from, [1, 0]);
        }
        
        if (nodeMap.has(to)) {
            const [OUT, IN] = nodeMap.get(to);
            nodeMap.set(to, [OUT, IN + 1]);
        } else {
            nodeMap.set(to, [0, 1]);
        }
    }
    
    
    for (const [nodeNumber, node] of nodeMap) {
        const [OUT, IN] = node;

        if (IN === 0 && OUT >= 2) {
            answer[0] = nodeNumber;
        } else if (IN > 0 && OUT === 0) {
            answer[2]++;
        } else if (IN >= 2 && OUT >= 2) {
            answer[3]++;
        }
    }
    
    const criticalNode = answer[0]
    const [OUT, IN] = nodeMap.get(criticalNode)
    answer[1] = OUT - answer[2] - answer[3];
    
    return answer;
}