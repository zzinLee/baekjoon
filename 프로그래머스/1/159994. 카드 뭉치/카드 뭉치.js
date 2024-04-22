function solution(cards1, cards2, goal) {
    const cardsDeck1 = cards1.reverse();
    const cardsDeck2 = cards2.reverse();
    let oneIdx = cardsDeck1.length - 1;
    let twoIdx = cardsDeck2.length - 1;
    
    for (const word of goal) {
        if (word === cardsDeck1[oneIdx]) {
            cardsDeck1.pop();
            oneIdx--;
        } else if (word === cardsDeck2[twoIdx]) {
            cardsDeck2.pop();
            twoIdx--;
        } else {
            return "No";
        }
    }

    return "Yes";    
}