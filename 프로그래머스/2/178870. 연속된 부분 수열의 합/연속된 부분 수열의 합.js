function solution(sequence, k) {
    const ans = [];
    let [left, right] = [0, 0];
    let sum = sequence[left];
    
    while (right < sequence.length) {
        if (sum < k) {
            right++;
            sum += sequence[right];
        } else if (sum === k && left <= right) {
            ans.push([left, right]);
            right++;
            sum += sequence[right];
        } else if (sum > k) {
            sum -= sequence[left];
            left++;
        }
    }
    
    ans.sort((a, b) => {
        const [leftA, rightA] = [a[0], a[1]];
        const [leftB, rightB] = [b[0], b[1]];
        
        return (rightA - leftA) - (rightB - leftB);
    });
    
    return ans[0];
}
