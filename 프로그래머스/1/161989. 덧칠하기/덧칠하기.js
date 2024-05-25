function solution(n, m, section) {
    if (section.length === 0) return 0;
    if (section.length === 1) return 1;
    const len = section.length;
    let paint = 1;
    let standIndex = 0;
    let compIndex = 1;
    
    while (standIndex < len && compIndex < len) {
        if (section[compIndex] - section[standIndex] < m) {
            compIndex++;
        } else {
            paint++;
            standIndex = compIndex;
            compIndex = standIndex + 1;
        }
    }

    return paint;
}