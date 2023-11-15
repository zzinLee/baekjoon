function solution(n) {
    const binaryNumber = n.toString(2);
    const countOne = function (string) {
        let count = 0;
        
        for (let i = 0; i < string.length; i++) {
            if (string[i] === "1") {
                count++;
            }
        }
        
        return count;
    };
    
    const numberOfOne = countOne(binaryNumber);
    let plusNumber = n;
    
    while (true) {
        plusNumber++;
        const binaryPlusNumber = plusNumber.toString(2);
        
        if (countOne(binaryPlusNumber) === numberOfOne) {
            return parseInt(binaryPlusNumber, 2);
        }
    }   
}