function solution(picks, minerals) {
    const [DIAMOND, IRON, STONE] = ["diamond", "iron", "stone"];
    let mineralRecords = [];
    let [diamondTools, ironTools, stoneTools] = picks;
    const len = Math.min((diamondTools + ironTools + stoneTools) * 5, minerals.length);
    
    for (let start = 0; start < len; start += 5) {
        const end = Math.min(start + 5, len);
        const record = [0, 0, 0];
        
        for (let iter = start; iter < end ; iter++) {
            const current = minerals[iter];
            
            if (current === DIAMOND) {
                record[0]++;
            } else if (current === IRON) {
                record[1]++;
            } else {
                record[2]++;
            }
        }
        
        mineralRecords.push(record);
    }
    
    mineralRecords.sort((a, b) => {
        return b[0] - a[0] === 0 ? b[1] - a[1] : b[0] - a[0];
    });
    
    let currentFati = 0;
    
    for (let index = 0; index < mineralRecords.length; index++) {
        if (!diamondTools && !ironTools && !stoneTools) {
            break;
        }
        
        const [diamond, iron, stone] = mineralRecords[index];
        
        if (diamondTools) {
            currentFati += (diamond + iron + stone);
            diamondTools--;
        } else if (ironTools) {
            currentFati += 5 * diamond;
            currentFati += iron;
            currentFati += stone;
            ironTools--;
        } else {
            currentFati += 25 * diamond;
            currentFati += 5 * iron;
            currentFati += stone;
            stoneTools--;
        }
    }
    
    return currentFati;
}
