function isConsecutiveNumber(str) {
  const str2 = str
    .split(" ")
    .sort((a, b) => a - b)
    .join(" ");

  console.log(str === str2 ? "YES" : "NO");
}

const str = "1 2 3 4 5 2";
isConsecutiveNumber(str);
