/**
 * 오른쪽으로 한칸 이동하는 순회 후,
 *
 * 원래의 값과 순회후의 값이 가장 작은 인덱스와 두 값 출력
 *
 * @param {Number[]} inL 숫자 리스트
 * @param {Number} inN 순회 횟수
 */
function rotate(inL, inN) {
  const len = inL.length;

  let minIndex = -1;
  let minValueArray = [];

  let difference = 0;
  let rotateIndex = -1;

  let currentValue = 0;
  let rotateValue = 0;

  let min = Infinity;

  for (let i = 0; i < len; i++) {
    rotateIndex = i - inN < 0 ? len + (i - inN) : i - inN;

    currentValue = inL[i];
    rotateValue = inL[rotateIndex];

    difference = Math.abs(currentValue - rotateValue);

    if (difference < min) {
      minIndex = i;
      minValueArray = [currentValue, rotateValue];
    }
  }

  console.log(`index : ${minIndex}`);
  console.log(`value : ${minValueArray.join(', ')}`);
}

const l = [10, 20, 25, 27, 34, 35, 39]; // 기존 값
const n = 2; // 순회 횟수

rotate(l, n);
