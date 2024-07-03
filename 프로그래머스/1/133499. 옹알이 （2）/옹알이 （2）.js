function solution(babbling) {
    const canSpeak = ["aya", "ye", "woo", "ma"];
    
    for (let index = 0; index < babbling.length; index++) {
        for (const word of canSpeak) {
            if (babbling[index].includes(word.repeat(2))) {
                continue;
            } else {
                babbling[index] = babbling[index].replaceAll(word, " ");
            }
        }
    }
    
    const transformed = babbling.map((babble) => babble.replaceAll(" ", ""));
    return transformed.filter((bubble) => bubble.length === 0).length;
}
