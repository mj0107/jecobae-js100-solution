/**
 * 점수 배열인 point에서 낮은 점수의 순서로 초밥을 먹는데,
 * dish번째 초밥을 먹고자 할 때
 * 접시가 몇 번 지나가고 먹을 수 있을지 반환하는 함수
 *
 * @param {Number[]} point 각 초밥의 점수
 * @param {Number} dish 위치
 * @returns {Number} 접시가 지나간 횟수
 */
function getHowManyPassedDishes(point, dish) {
  let idx = 0;
  let cnt = -1;
  let min = Math.min(...point);
  while (true) {
    // 회전해서 맨 끝 인덱스 다음은 맨 처음 인덱스가 와야 한다.
    // Circular Queue의 인덱스 참조처럼 인덱스 접근.
    idx = idx % point.length;

    // 이미 먹은 초밥(Infinity)이 아닐경우 +1을 해준다.
    // (먹은 초밥은 카운트 하지 않기때문에)
    if (point[idx] !== Infinity) cnt += 1;

    // 현재 인덱스의 값이 최솟값이라면,
    if (point[idx] === min) {
      // 현재 값을 무한대로 바꿔주고
      point[idx] = Infinity;
      // 다시 최솟값을 구한다.
      // 가장 낮은 점수의 초밥을 먹었기 때문에 무한대로 바꿔주어서
      // 그 다음 최솟값을 구하는 과정이다.
      min = Math.min(...point);

      // 문제에서 dish는 0이 아니라 1부터 시작한다.
      if (idx + 1 === dish) return cnt;
    }

    idx += 1;
  }
}

const point = [5, 2, 3, 1, 2, 5];
const dish = 1;

const result = getHowManyPassedDishes(point, dish);

console.log(result); // 10
