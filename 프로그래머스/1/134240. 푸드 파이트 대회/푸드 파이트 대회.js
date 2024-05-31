function solution(food) {
    let oneSideStr = "";
    let otherSideStr = "";
    
    for (let i = 1; i < food.length; i++) {
        const oneSide = Math.floor(food[i] / 2);
        
        oneSideStr += String(i).repeat(oneSide);
        otherSideStr = String(i).repeat(oneSide) + otherSideStr;
    }
    
    return oneSideStr + "0" + otherSideStr;
}

