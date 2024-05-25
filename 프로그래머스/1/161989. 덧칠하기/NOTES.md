# 덧칠하기

## Solution

이 풀이는 앞에서부터 페인트가 칠해진 범위(인덱스)를 기록하는 방식으로 풀이합니다.<br>
0부터 m까지 칠했다면, 칠해진 구역은 m - 1입니다.<br>
다음에 오는 section 값이 이 구간 내라면 칠한 횟수를 더할 필요가 없고,<br>
다음에 오는 section 값이 이 구간 외라면 칠한 횟수를 더해야 합니다.<br>
</br>


```
function solution(n, m, section) {
  let answer = 0;
  let painted = 0;

  for (let section of sections) {
    if (painted < section) {
      answer++;
      painted = section + m - 1;
    }
  }

  return answer;
}
```
