function solution(plans) {
    const done = [];
    const dont = [];
    const hw = plans.map((plan) => {
        const [hour, min] = plan[1].split(":").map(Number);
        const startmins = 60 * hour + min;
        
        return [plan[0], Number(startmins), Number(plan[2])];
    }).sort((a, b) => a[1] - b[1]);
    
    for (let i = 0; i < hw.length - 1; i++) {
        const [prev, next] = [hw[i], hw[i + 1]];
        const [name, start, last] = prev;
        const [nextName, nextStart, nextLast] = next;
        
        if (start + last < nextStart) {
            done.push(name);
            
            let t = nextStart - last - start;
            
            while (t > 0 && dont.length > 0) {
                const current = dont.pop();
                
                if (t >= current.residue) {
                    done.push(current.name);
                    
                    t -= current.residue;
                } else {
                    current.residue -= t;
                    
                    dont.push(current);
                    
                    break;
                }
            }
        } else if (start + last === nextStart) {
            done.push(name);
        } else {
            const residue = last + start - nextStart;
            dont.push({ name, residue });
        }
    }
    
    done.push(hw[hw.length - 1][0]);
    
    while (dont.length > 0) {
        const current = dont.pop();
        done.push(current.name);
    }

    return done;
}
