# 호텔 대실

## Solution

아래의 풀이는 시간테이블을 직접 array 형태로 구현하여 풀이하였습니다. <br>
book_time 배열을 순회하면서 예약 시간대에 해당하면 해당 구간 + 1 연산 진행합니다. <br>
겹쳐지는 일정 수만큼 더해지므로 해당 배열의 max값을 구하면, 필요한 방의 수를 구할 수 있습니다. <br>

시간복잡도 O(N^2)

```
function makeMinStamp(time) {
    const [hour, min] = time.split(":").map(v => Number(v));
    return hour * 60 + min;
}

function solution(book_time) {
    const timeArr = Array.from({ length: makeMinStamp('23:59') + 10 }, () => 0);
  console.log(timeArr);

    book_time.forEach((time, i) => {
        const [s, e] = time;
        let start = makeMinStamp(s);
        const end = makeMinStamp(e) + 9;

        for (start; start <= end; start++) {
            timeArr[start]++;
        }
      
      console.log(timeArr);
    });

    return Math.max(...timeArr);
}

solution([["15:00", "17:00"], ["16:40", "18:20"], ["14:20", "15:20"], ["14:10", "19:20"], ["18:20", "21:20"]]);
```
