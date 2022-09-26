/**
 * 소괄호와 중괄호가 있는 수학공식이 제대로 괄호의 짝이 맞는지 반환하는 함수
 * @param {String} e 수학공식
 * @returns {String} 옳으면 'True', 틀리면 'False' return
 */
function math(e) {
  let stack = [];

  const BUCKET_PAIR = {
    '(': ')',
    '{': '}',
  };

  for (el of e) {
    // BUCKET_PAIR의 key라면, 즉 여는괄호라면 스택에 push
    if (el in BUCKET_PAIR) stack.push(el);
    // BUCKET_PAIR의 value라면, 즉 닫는괄호라면
    if (Object.values(BUCKET_PAIR).includes(el)) {
      // 스택의 가장 위에 있는 여는괄호와 짝이 맞는 닫는괄호라면 pop
      if (BUCKET_PAIR[stack.at(-1)] === el) stack.pop();
      // 아니라면 괄호의 순서가 잘못되어서 'False' return
      else return 'False';
    }
  }
  // 모든 괄호의 순서와 짝이 제대로 맞다면,
  // 위에서 다 pop이 되어서 스택은 비어있을것이다.
  return stack.length === 0 ? 'True' : 'False';
}

const ex = '5 + 7 * {(3 * 5)}'; // True
// const ex = '5 + 7){ * (3 * 5)'; // False
const result = math(ex);

console.log(result);
