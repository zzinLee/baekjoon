function solution(friends, gifts) {
  const userMap = {};
  const nextmonths = {};
  
  for (const user of friends) {
    userMap[user] = {
      giftsTo: {},
      giftsFrom: {},
      giftDegree: 0,
    };
  }
  

  for (const record of gifts) {
    const [from, to] = record.split(" ");
    
    userMap[from].giftsTo[to] = (userMap[from].giftsTo[to] || 0) + 1;
    userMap[to].giftsFrom[from] = (userMap[to].giftsFrom[from] || 0) + 1;
    
    userMap[from].giftDegree++;
    userMap[to].giftDegree--;
  }
  

  for (let i = 0; i < friends.length - 1; i++) {
    const user = friends[i];
    let userReceived = 0;
    let userGive = 0;
    
    for (let j = i + 1; j < friends.length; j++) {
      const friend = friends[j];
      
      userReceived = (userMap[user].giftsFrom[friend] || 0);
      userGive = (userMap[user].giftsTo[friend] || 0);
      
      if (userReceived < userGive) {
        nextmonths[user] = ( nextmonths[user] || 0) + 1;
      } else if (userReceived > userGive) {
        nextmonths[friend] = (nextmonths[friend] || 0) + 1;
      } else {
        if (userMap[user].giftDegree > userMap[friend].giftDegree) {
          nextmonths[user] = ( nextmonths[user] || 0) + 1;
        } else if (userMap[user].giftDegree < userMap[friend].giftDegree) {
          nextmonths[friend] = (nextmonths[friend] || 0) + 1;
        } else {
          continue;
        }
      }
    }
  }
  
  const nextmonthGifts = Object.values(nextmonths);
  
  return nextmonthGifts.length ? Math.max(...nextmonthGifts) : 0;
}
