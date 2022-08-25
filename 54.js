function isConsecutiveNumber(str) {
  let arr = str.split(" ").map(Number);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[0] + i) return "NO";
  }

  return "YES";
}

const str = "1 2 3 4 5"; // YES
/*
  1 4 2 6 3 // NO
  1 2 3 4   // 공백을 입력받았을 경우 NO
  1 2 3 4 hello // 숫자가 아닌 문자가 들어갔을 경우 NO
*/
const result = isConsecutiveNumber(str);
console.log(result);
