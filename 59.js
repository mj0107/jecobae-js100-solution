function fillBlank(str) {
  let result = "";

  result += "=".repeat((50 - str.length) / 2);
  result += str;
  result += "=".repeat((50 - str.length) / 2);

  console.log(result);
}

const str = "hello";
fillBlank(str);
