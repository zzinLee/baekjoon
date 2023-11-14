function solution(s) {
    let binaryTransferCount = 0;
    let zeroCount = 0;
    let result = s;
    
    while (result !== "1") {
        const str = result.split("").map((char) => {
            if (char === "0") {
                zeroCount++;
                return "";
            } else {
                return char;
            }
        }).join("");
    
        result = str.length.toString(2);
        binaryTransferCount++;
    }
    
    return [binaryTransferCount, zeroCount]
}
