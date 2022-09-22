function getCombination(consonantArray, combinationNum) {
  const result = [];

  // 한개만 골라서 조합을 할 경우 그냥 모든 원소 return
  if (combinationNum === 1) return consonantArray.map((el) => [el]);

  consonantArray.forEach((el, idx) => {
    // 현재 인덱스 뒤로 모든 원소
    const rest = consonantArray.slice(idx + 1);
    // 현재 원소인 el을 하나 고르고, 한 개 뺀 나머지를 rest에서 고름
    const combinations = getCombination(rest, combinationNum - 1);
    // rest에서 고른 조합을 현재 원소인 el과 붙여줌
    const attach = combinations.map((combination) =>
      [el, ...combination].join('')
    );
    result.push(...attach);
  });

  return result;
}

const consonantArray = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ'];
const combinationNum = 3;

const result = getCombination(consonantArray, combinationNum);
console.log(result);
