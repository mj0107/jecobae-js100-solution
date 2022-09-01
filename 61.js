/**
 * 문자열을 입력받고 연속되는 문자열을 압축해서 표현하기
 * @param {string} str
 * @result string
 */
function compactString(str) {
  let cnt = 1;
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      result += `${str[i]}${cnt}`;
      cnt = 1;
    } else cnt++;
  }

  console.log(result);
}

const str = "aaabbbbcdddd";
compactString(str); // a3b4c1d4
