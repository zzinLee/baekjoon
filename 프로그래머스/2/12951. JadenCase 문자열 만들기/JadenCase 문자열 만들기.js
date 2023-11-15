function solution(s) {
    let string = s.split(" ");
    
    string = string.map((word) => {
        return word.split("").map((char, index) => {
            if (index === 0) {
                char = char.toUpperCase();
            } else {
                char = char.toLowerCase();
            }
            
            return char;
        }).join("");
    });
    
    return string.join(" ");
}