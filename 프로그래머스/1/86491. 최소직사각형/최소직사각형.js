function solution(sizes) {
    let longerMax = -Infinity;
    let shorterMax = -Infinity;
    
    sizes.forEach(([w, h]) => {
        const [longer, shorter] = w > h ? [w, h] : [h, w];
        
        if (longerMax < longer) {
            longerMax = longer;
        }
        
        if (shorterMax < shorter) {
            shorterMax = shorter;
        }
    });
    
    return longerMax * shorterMax;
}