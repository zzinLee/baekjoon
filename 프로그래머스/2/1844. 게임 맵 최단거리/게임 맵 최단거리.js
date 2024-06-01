function solution(maps) {
	const n = maps.length;
	const m = maps[0].length;
	const movesX = [-1, 1, 0, 0];
	const movesY = [0, 0, -1, 1];
	const q = [[0, 0, 1]]; //좌표X,좌표Y,Count
	
	maps[0][0] = 0; //방문표기
	
	while (q.length) {
		const [x, y, count] = q.shift(); //BFS순회, 최단거리를 구하므로
		
		if (x === n - 1 && y === m - 1) {
			return count;
		}
		
		for (let i = 0; i < 4; i++) {
			const newX = x + movesX[i];
			const newY = y + movesY[i];
			
			if (newX < 0 || newY < 0 || newX >= n || newY >= m
				|| !maps[newX][newY]) {
				continue;
			}
	
			maps[newX][newY] = 0;
			
			q.push([newX, newY, count + 1]);
		}
	}
	
	return -1;	
}
