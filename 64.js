/**
 * 정량 N에 정확히 맞춰야만 움직이는 화물용 엘리베이터가 있습니다.
 * 화물은 7kg, 3kg 두 가지이며 팔이 아픈 은후는 가장 적게 화물을 옮기고 싶습니다.
 * 예를 들어 정량이 24kg이라면 3kg 8개를 옮기는 것보다는
 * 7kg 3개, 3kg 1개 즉 4개로 더 적게 옮길 수 있습니다.
 *
 * @param {Number} N 7kg과 3kg으로 맞출 정량
 * @returns {Number} 옮길 수 있는 횟수 return, 불가능하면 -1 return
 */
function carryCount(N) {
  let cnt = 0;

  while (true) {
    if (N < 3) break;

    if (N >= 7) N -= 7;
    else if (N >= 3) N -= 3;
    cnt++;
  }

  if (N > 0) return -1;
  else if (N === 0) return cnt;
}

const N = 24;
const result = carryCount(N);
console.log(result);
