function solution(numbers, target) {
    let ans = 0;
    
    search(0, 0);
    
    function search(index, sum) {
        if (index < numbers.length) {
            search(index + 1, sum + numbers[index]);
            search(index + 1, sum - numbers[index]);
        } else {
            if (sum === target) {
                ans++;
            }
        }
    }
    
    return ans;
}

