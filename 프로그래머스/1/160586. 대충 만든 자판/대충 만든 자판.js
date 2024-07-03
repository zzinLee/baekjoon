function solution(keymap, targets) {
    const keyMap = new Map();
    
    for (const keys of keymap) {
        const keyboards = keys.split("");
        
        for (let click = 0; click < keyboards.length; click++) {
            const ch = keyboards[click];
            
            if (keyMap.has(ch)) {
                const originCount = keyMap.get(ch);
                
                keyMap.set(ch, Math.min(originCount, click + 1))
            } else {
                keyMap.set(ch, click + 1);
            }
        }
    }
    
    const answer = [];
    
    for (const target of targets) {
        const targetString = target.split("");
        let count = 0;
        let none = false;
        
        for (const ch of targetString) {
            if (!keyMap.has(ch)) {
                none = true;
                
                break;
            }
            
            count += keyMap.get(ch);
        }
        
        if (none) {
            none = false;
            answer.push(-1);
        } else {
            answer.push(count);
        }
    }
    
    return answer;
}