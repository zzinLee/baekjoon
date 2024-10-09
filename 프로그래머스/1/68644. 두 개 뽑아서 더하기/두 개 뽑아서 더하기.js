function solution(numbers) {
    const set = new Set();
    const len = numbers.length;
    
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            set.add(numbers[i] + numbers[j]);
        }
    }
    
    const arr = Array.from(set);
    
    return arr.sort((a, b) => a - b);
}