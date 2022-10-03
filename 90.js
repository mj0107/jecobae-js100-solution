/**
 * 기준성분, 같은 요소의 개수가 공백으로 구분된 문자열인 INPUT과
 * 비교할 데이터들의 배열인 DATA_ARR를 받아서
 * 기준성분, 그리고
 * 인자로 들어온 개수만큼 성분이 같은 데이터를 반환 해주는 함수
 *
 * @param {string} INPUT 기준성분, 개수가 공백으로 구분된 문자열
 * @param {string[]} DATA_ARR 데이터들이 담긴 배열
 * @returns {string[]} 인자로 들어온 개수만큼 같은 데이터들 return
 */
function findSameIngredientMedicine(INPUT, DATA_ARR) {
  let result = [];
  const [INPUT_MEDICINE, INPUT_COUNT] = INPUT.split(' ');

  // 비교할 기준 의약 성분의 각 알파벳 개수를 담아주는 객체
  let alphabetCount = {};
  // 각 알파벳 개수를 세서 넣어줌
  INPUT_MEDICINE.split('').forEach((el) => {
    alphabetCount[el] = alphabetCount[el] + 1 || 1;
  });

  let alphabetCountArr = [];
  let sameAlphabetCount = [];
  for (const DATA of DATA_ARR) {
    let alphabetCountClone = { ...alphabetCount };
    // 데이터로 들어오는 의약 성분들의 각 알파벳 개수를 세서
    // 비교기준 각 알파벳 개수에 더해줌
    DATA.split('').forEach((el) => {
      alphabetCountClone[el] = alphabetCountClone[el] + 1 || 1;
    });

    alphabetCountArr = Object.values(alphabetCountClone);
    // 알파벳의 개수가 2인것들만 filter로 걸러줌
    // 알파벳의 개수가 2인것이 나타내는 의미는 제약 데이터의 성분은 중복이 없으므로
    // 비교기준 성분과 비교대상 성분 둘다 가지는 알파벳이라면
    // 서로 개수를 합쳤을 시 2가 됨
    sameAlphabetCount = alphabetCountArr.filter((el) => el === 2);

    // 개수가 2인 알파벳의 개수가 INPUT_COUNT와 같다면
    // result에 push
    if (sameAlphabetCount.length == INPUT_COUNT) result.push(DATA);
  }

  return result;
}

const INPUT = 'ABCDEFGH 4';
const DATA_ARR = ['EFGHIJKL', 'EFGHIJKM', 'EFGHIJKZ'];

const result = findSameIngredientMedicine(INPUT, DATA_ARR);
console.log(result);
