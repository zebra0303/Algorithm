const log = console.log;
// people : 각 탑승객의 몸무게 배열
// limit : 보트에 탑승할 수 있는 최대 무게 (limit <= Math.max(people))
// 보트에는 2명까지 탑승 가능
// 출력 : 최소한의 보트를 사용횟수

function solution(people, limit) {
  let answer = 0;
  const half = Math.floor(limit / 2);
  // 몸무게 순으로 정렬
  people.sort((a, b) => a - b);

  while (people.length > 0) {
    const weight01 = people.shift();
    answer++;
    //log(weight01);
    if (weight01 > half) {
      // 몸무게가 제한무게의 반이상인 사람만 남았을때 (둘이서 배를 탈 수 없음 TT)
      answer += people.length;
      people = [];
    } else {
      let isFull = false;
      // 가벼운 사람과 무거운 사람을 같이 태움 (최대한 많은 무게를 싣기 위해)
      for (let i = people.length - 1; i >= 0; i--) {
        const weight02 = people[i];
        // 제한 무게를 넘지 않는 선에서 가장 무거운 1명을 더 태움
        if (weight01 + weight02 <= limit) {
          people.splice(i, 1);
          isFull = true;
          break;
        }
      }
      // 보트에 더 이상 같이 탈사람이 없을때 (남아 있는 사람들은 무거운 사람들 TT)
      if (isFull === false) {
        isFull = true;
        answer += people.length;
        people = [];
      }
    }
  }

  return answer;
}

log(solution([30, 50, 50, 10, 90, 70], 100));
