function solution(phone_book) {
    phone_book.sort();
    
    const isPrefix = (cur, next) => {
        for (let i = 0; i < cur.length; i++) {
            if (cur[i] !== next[i]) {
                return false;
            }
        }
        
        return true;
    }
    
    for (let i = 0; i < phone_book.length - 1; i++) {
        const cur = phone_book[i];
        const next = phone_book[i + 1];
        
        if (next.includes(cur)) {
            if (isPrefix(cur, next)) {
                return false;
            }
        }
    }
    
    return true;
}


