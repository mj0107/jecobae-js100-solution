/**
 * 첫 번째 가져가는 음식이 K 번째 음식이며
 *
 * 나머지는 첫 번째 음식으로부터 시계방향으로 가져간다
 *
 * @param {Number} N 음식의 개수
 * @param {Number} K 먹은 음식 다음으로 K번째 음식을 먹는다
 * @returns {Number[]} 남은 음식들의 번호
 */
function roundTable(N, K) {
  // N의 길이를 가진 배열 0으로 초기화, 생성
  let isFoodRest = Array.from({ length: N }, () => 0);
  // 첫번째 음식이 1번이므로 각 인덱스보다 1만큼 크게 value 초기화
  isFoodRest.forEach((_, idx) => {
    isFoodRest[idx] = idx + 1;
  });

  let idx = K - 1;

  while (isFoodRest.length > 2) {
    idx = idx % isFoodRest.length;
    isFoodRest.splice(idx, 1);
    // idx 번째 value를 삭제했으므로 뒤의 요소들이 인덱스가 하나씩 줄어든다.
    // 따라서 원래 테이블처럼 해당 인덱스에 접근하려면 -1을 해주어야 한다.
    idx += K - 1;
  }

  return isFoodRest;
}

const N = 6;
const K = 3;

const result = roundTable(N, K);
console.log(result);
