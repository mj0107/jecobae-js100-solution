/**
 * 20190923을 출력하는 함수
 * 1. 코드 내에 숫자가 없어야 한다.
 * 2. 파일 이름이나 경로를 사용해서는 안된다.
 * 3. 시간, 날짜 함수를 사용해서는 안된다.
 * 4. 에러 번호 출력을 이용해서는 안된다.
 * 5. input을 이용해서는 안된다.
 */
function print20190923() {
  let result = "";
  const arr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  result += arr.indexOf("two");
  result += arr.indexOf("zero");
  result += arr.indexOf("one");
  result += arr.indexOf("nine");
  result += arr.indexOf("zero");
  result += arr.indexOf("nine");
  result += arr.indexOf("two");
  result += arr.indexOf("three");

  console.log(result);
}

print20190923();
