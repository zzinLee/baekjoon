# Pass

## Solution1

내 풀이이지만, O(N^2)으로 좋은 풀이는 아님
</br>
<br>
정확성: 66.7
효율성: 33.3
합계: 100.0 / 100.0
</br>

```js
function solution(prices) {
  const arr = new Array(prices.length).fill(0);

  for (let i = 0; i < prices.length - 1; i++) {
    const current = prices[i];

    for (let j = i + 1; j < prices.length; j++) {
      const next = prices[j];

      if (current <= next) {
        arr[i]++;
      } else {
        arr[i]++;

        break;
      }
     }
   }

   return arr;
}
```


## Solution2
```js
function solution(prices) {
  const answer = new Array(prices.length).fill(0);
  const stack = [];
  let length = prices.length;

  for(let i = 0; i < length; i++) {
    while(stack.length && prices[i] < prices[stack[stack.length - 1]]) {
      let temp = stack.pop();
      answer[temp] = i - temp;
    }
    stack.push(i);
  }

  while(stack.length) {
    let temp = stack.pop();
    answer[temp] = length - temp - 1;
  }

  return answer;
}
```
