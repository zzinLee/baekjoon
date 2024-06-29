function solution(s, skip, index) {
    const str = s.split("").map((ch) => ch.charCodeAt());
    const skipIndex = skip.split("").map((ch) => ch.charCodeAt());
    const skipSet = new Set(skipIndex);
    let count = 0;
    let ans = "";
    
    for(const chNum of str) {
        let transformedNum = chNum;
        let count = 0;

        while (count < index) {
            transformedNum++;
            
            if (transformedNum > 122) {
                transformedNum -= 26;
            }
            
            if (skipSet.has(transformedNum)) {
                continue;
            }
            
            count++;
        }

        ans += String.fromCharCode(transformedNum);
    }

    return ans;
}