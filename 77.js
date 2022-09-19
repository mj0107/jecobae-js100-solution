/**
 * 두 문자열이 주어지면 가장 긴 부분 공통 문자열의 길이를 반환하는 함수
 * @param {String} str1
 * @param {String} str2
 * @returns {Number} 가장 긴 부분 공통 문자열의 길이
 */
function getLongestCommonSubsequence(str1, str2) {
  let shorterString = "";
  let longerString = "";

  if (str1.length >= str2.length) [longerString, shorterString] = [str1, str2];
  else [longerString, shorterString] = [str2, str1];

  let shorterStringSub = [];
  for (let i = 0; i < shorterString.length; i++) {
    for (let j = i; j < shorterString.length; j++) {
      shorterStringSub.push(shorterString.slice(i, j + 1));
    }
  }

  let inLogerString = shorterStringSub.filter((val) =>
    longerString.includes(val)
  );

  inLogerString.sort((a, b) => b.length - a.length);
  const maxLCSLength = inLogerString[0].length;

  return maxLCSLength;
}

const str1 = "THISISSTRINGS";
const str2 = "KIOTHIKESSISKKQQAEW";

const result = getLongestCommonSubsequence(str1, str2);
console.log(result); // 3
