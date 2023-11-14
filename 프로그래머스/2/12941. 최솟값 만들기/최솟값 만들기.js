function solution(A,B){
    const arrA = [...A].sort((a, b) => a - b);
    const arrB = [...B].sort((a, b) => b - a);
    
    return arrA.reduce((prev, cur, index) => {
        prev += cur * arrB[index];
        return prev;
    }, 0);
}