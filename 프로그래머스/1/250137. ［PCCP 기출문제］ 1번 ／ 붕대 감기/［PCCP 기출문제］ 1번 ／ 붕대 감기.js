function solution(bandage, health, attacks) {
    let currentHealth = health;
    const [t, x, y] = bandage;
    const last = attacks[attacks.length - 1][0];
    let castingTime = 0;
    let attackIndex = 0;
    
    for (let s = 1; s <= last; s++) {
        const [attackTime, hurts] = attacks[attackIndex];
        
        if (s < attackTime) {
            castingTime++;
            
            if (currentHealth + x > health) {
                currentHealth = health;
            } else {
                currentHealth += x;
            }
            
            if (castingTime % t === 0) {
                if (currentHealth + y > health) {
                    currentHealth = health;
                } else {
                    currentHealth += y;
                }
            }
        } else {
            if (currentHealth - hurts <= 0) {
                return -1;
            } else {
                currentHealth -= hurts;
                attackIndex++;
                castingTime = 0;
            }
        }
    }
    
    return currentHealth;
}

