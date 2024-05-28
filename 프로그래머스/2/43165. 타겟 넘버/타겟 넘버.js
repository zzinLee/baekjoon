function solution(numbers, target) {
    let sumArr = [numbers[0], -1 * numbers[0]];
    let curIndex = 1;

    while (curIndex < numbers.length) {
        const newArr = [];
        
        while (sumArr.length) {
            const cur = sumArr.pop();
            const plus = cur + numbers[curIndex];
            const minus = cur - numbers[curIndex];
            newArr.push(plus, minus);
        }

        sumArr = newArr;
        curIndex++;
    }
    
    return sumArr.filter((v) => v === target).length;
}