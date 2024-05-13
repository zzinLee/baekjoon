function solution(h1, m1, s1, h2, m2, s2) {
    //0시0분0초 ~ h:m:s까지 겹치는 횟수
    const getCntFromMidNight = (h,m,s) => {
        // 시간은 360도를 12등분하여 순회하므로 1시간에 30도, 나머지도 이에 대입하여 각도계산
        const [hDegree,mDegree,sDegree] = [(h*30+m*0.5+s*0.5/60)%360,(m*6+s*0.1)%360,s*6]
        let ret = -1 //0시0분0초는 분에 한번이므로 -1로 시작
        // 각도 상 초침이 분침과 시침을 지났다면, 각 침에 1씩 증가
        if(sDegree>=mDegree) ret +=1
        if(sDegree>=hDegree) ret +=1

        ret += (h*60+m)*2 // 분 당 시침, 분침을 각각 1회씩 총 2회 만난다고 계산
        ret -= h // 59분 -> 0분일때는 분침과 만나지 않음
        if(h>=12) ret -= 2 // 11시59분59초 -> 12시인경우 분,초침과 만나지않고 12시에 2번이아닌 1번만 만나는걸로 처리
        return ret
    }

    //0시~주어진시간까지 횟수를 구한 이후 빼면 됨
    let ret = getCntFromMidNight(h2,m2,s2) - getCntFromMidNight(h1,m1,s1)
    if((h1===0||h1===12)&&m1===0&&s1===0) ret +=1 //0시와 12시인경우에만 예외적으로 1씩 더해줌
    return ret;

}
