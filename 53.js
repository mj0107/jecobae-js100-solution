function isValidBracketString(str) {
  if (!str.length) return; // 빈 문자열일 경우

  let left_bracket = [
    ["(", 0],
    ["{", 0],
    ["[", 0],
  ];
  let right_bracket = [
    [")", 0],
    ["}", 0],
    ["]", 0],
  ];

  for (const c of str) {
    // 괄호가 아닐 경우
    if (!"(){}[]".includes(c)) return false;

    for (let i = 0; i < left_bracket.length; i++) {
      // 닫는 괄호가 여는 괄호보다 먼저 나왔을 경우
      if (right_bracket[i][1] > left_bracket[i][1]) return false;
      if (left_bracket[i][0] === c) left_bracket[i][1]++;
      else if (right_bracket[i][0] === c) right_bracket[i][1]++;
    }
  }

  for (let i = 0; i < left_bracket.length; i++) {
    // 괄호 종류에 맞는 쌍의 갯수가 맞을 경우
    if (left_bracket[i][1] === right_bracket[i][1]) continue;
    else return false;
  }

  return true;
}

const str = "";

const result = isValidBracketString(str) ? "YES" : "NO";
console.log(result);
