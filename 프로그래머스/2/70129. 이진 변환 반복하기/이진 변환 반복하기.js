function solution(s) {
    let binaryTransferCount = 0;
    let zeroCount = 0;
    let result = s;
    
    while (result !== "1") {
        result = result.split("").map((char) => {
            if (char === "0") {
                zeroCount++;
                return "";
            } else {
                return char;
            }
        }).join("");
    
        result = result.length.toString(2);
        binaryTransferCount++;
    }
    
    return [binaryTransferCount, zeroCount];
}
