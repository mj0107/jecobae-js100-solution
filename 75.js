/**
 * 1부터 n까지의 수 중에서 각 자릿수가 3,6,9 일때만 박수를 친 횟수
 * @param {Number} n 입력값
 * @returns {Number} 박수를 친 횟수
 */
function strange369(n) {
  let clapCnt = 0;
  let isValid = false; // 각 자릿수가 3,6,9 라면 true
  let seperateDigit = []; // 각 자릿수를 분리해서 저장하기 위한 변수

  for (let i = 1; i <= n; i++) {
    seperateDigit = i.toString().split("");
    isValid = seperateDigit.every((el) => el % 3 === 0 && el != 0);

    if (isValid) clapCnt += 1;
  }

  return clapCnt;
}

const n = 93;
const result = strange369(n);

console.log(result);
