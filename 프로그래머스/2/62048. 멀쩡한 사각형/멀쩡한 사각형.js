function solution(w, h) {
    const GCD = (a, b) => {
        if (b === 0) {
            return a;
        }
        
        return GCD(b, a % b);
    };
    const calculateY = (x) => (w - x) * h / w;
    
    const GCD_WH = GCD(w, h);
    const [Gw, Gh] = [w / GCD_WH, h / GCD_WH];
    const iteration = h/Gh;
    
    let boxes = 0;

    for (let x = 0; x < Gw; x++) {
        const [prevX, nextX] = [x, x + 1];
        const [prevY, nextY] = [calculateY(x), calculateY(x + 1)];
        const eliminated = Math.ceil(prevY) - Math.floor(nextY);
        boxes += (h - eliminated);
    }
    
    return boxes * iteration;
}