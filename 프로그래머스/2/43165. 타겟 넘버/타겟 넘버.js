function solution(numbers, target) {
    let ans = 0;
    
    DFS(0, 0);
    
    function DFS(index, sum) {
        if (index < numbers.length) {
            DFS(index + 1, sum + numbers[index]);
            DFS(index + 1, sum - numbers[index]);
        } else if (index === numbers.length) {
            if (sum === target) {
                ans++;
            }
        }
    }
    
    return ans;
}
