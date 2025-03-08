function solution(a, b) {
    const WEEK = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
    const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    //1월 1일은 5 index
    let days = 0;
    for (let i = 0; i <= a - 2; i++) {
        days += month[i];
    }
    days += (b - 1);
    
    return WEEK[days % 7];
}