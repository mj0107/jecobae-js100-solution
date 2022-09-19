/**
 * 한 번에 수색 가능한 범위 b x b로 a x a의 크기를 가진 도시를 수색하면서
 *
 * 한 번에 제일 많이 발견할 수 있는 지뢰의 개수를 얻는 함수
 *
 * @param {Number} a 수색할 도시의 크기
 * @param {Number} b 한 번에 수색 가능한 범위
 * @param {Number[]} isMine 도시 내 지뢰의 여부, 1이면 지뢰가 있음
 * @returns {Number} 수색 가능한 범위 b*b 내에서 찾아낼 수 있는 가장 큰 지뢰의 개수
 */
function getMineCount(a, b, isMine) {
  let max = 0;

  for (let i = 0; i <= a - b; i++) {
    for (let j = 0; j <= a - b; j++) {
      let cnt = 0;
      for (let k = i; k < b + i; k++) {
        for (let l = j; l < b + j; l++) {
          if (isMine[k][l]) cnt += 1;
        }
      }
      max = Math.max(max, cnt);
    }
  }

  return max;
}

const a = 5;
const b = 3;
const isMine = [
  [1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
];

const result = getMineCount(a, b, isMine);
console.log(result);
