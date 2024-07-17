function solution(n, wires) {
    const tree = Array.from({ length: n + 1 }, () => new Set());
    let minDiff = Infinity;
    
    for (const [v1, v2] of wires) {
        tree[v1].add(v2);
        tree[v2].add(v1);
    }
    
    for (let linkedNode = 1; linkedNode <= n; linkedNode++) {
        const links = Array.from(tree[linkedNode]);
        
        for (const linkingNode of links) {
            cut(tree, linkedNode, linkingNode);
            
            const diff = countDiff(tree, linkedNode, linkingNode);
            
            minDiff = Math.min(diff, minDiff);
            
            reset(tree, linkedNode, linkingNode);
        }
    }
        
    return minDiff;
}

function cut(tree, node1, node2) {
    tree[node1].delete(node2);
    tree[node2].delete(node1);
}

function countLinkage(queue, tree, node) {
    const visited = Array.from({ length: tree.length }, () => false);
    let count = 0;
    
    while (queue.length) {
        const node = queue.pop();
        visited[node] = true;
        count++;
        
        const children = Array.from(tree[node]);
        
        for (const child of children) {
            if (!visited[child]) {
                queue.push(child);
            }
        }
    }

    return count;
}

function countDiff(tree, node1, node2) {
    const links1 = countLinkage([node1], tree, node1);
    const links2 = countLinkage([node2], tree, node2);
    
    return Math.abs(links1 - links2);
}

function reset(tree, node1, node2) {
    tree[node1].add(node2);
    tree[node2].add(node1);
}
