/**
 * 이전 숫자에서 각 숫자의 개수를 나타내어 숫자로 만들고
 * 다시 그 숫자를 같은 규칙으로 만들어 나열했을때,
 * N번째에 오는 수
 *
 * @description
 * 1. 1 -> (1)
 * 2. 11 -> (1이 1개)
 * 3. 12 -> (1이 2개)
 * 4. 1121 -> (1이 1개 2가 1개)
 * 5. 1321 -> (1이 3개 2가 1개)
 * 6. 122131 -> (1이 2개 2가 1개 3이 1개)
 * 7. 132231 -> (1이 3개 2가 2개 3이 1개)
 *
 * @param {Number} N 진행 횟수
 * @returns {Number} 진행 횟수에 해당되는 수
 */
function numberGame(N) {
  let cur = '1';
  N -= 1;

  while (N--) {
    let numberCnt = {};
    for (el of cur) {
      numberCnt[el] = numberCnt[el] + 1 || 1;
    }
    cur = Object.entries(numberCnt).flat().join('');
  }

  return cur;
}

const N = 6;
const result = numberGame(N);

console.log(result);
