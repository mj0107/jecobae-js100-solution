/**
 * 수학공식을 입력받아 괄호가 제대로 입력되었는지 판단하는 함수
 * @param {String} e 수학공식
 * @returns {String} 옳다면 "True", 아니라면 "False" 리턴
 */
function math(e) {
  let tmp = 0;

  for (el of e) {
    if (el === '(') tmp += 1;
    else if (el === ')') tmp -= 1;

    if (tmp < 0) return 'False';
  }

  return tmp === 0 ? 'True' : 'False';
}

const ex = '5 + 7) * (3 * 5)';
const result = math(ex);

console.log(result);
