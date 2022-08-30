function printComma(n) {
  const n_str = String(n).split("").reverse();
  let result = [];
  for (let i = 1; i < n_str.length + 1; i++) {
    result.push(n_str[i - 1]);
    if (i % 3 === 0) {
      result.push(",");
    }
  }
  if (result.at(-1) === ",") result.pop();
  result.reverse();
  console.log(result.join(""));
}

const n = 123456789;
printComma(n); // 123,456,789
console.log(Number(n).toLocaleString()); // 123,456,789
