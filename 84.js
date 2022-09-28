function pickNumber(N, K) {
  return parseInt(
    N.toString() // 문자열로 변환
      .split('') // 각 문자별로 split
      .map(Number) // 숫자로 변환
      .sort((a, b) => b - a) // 내림차순으로 정렬
      .slice(0, K) // 맨 앞 K개만 slice
      .join('') // 붙여줌
  ); // 정수로 변환
}

const N = 1723;
const K = 2;

const result = pickNumber(N, K);
console.log(result);
