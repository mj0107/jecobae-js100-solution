function initial(input) {
  let result = "";
  input.split(" ").map((el) => (result += el.at(0)));

  console.log(result);
}

const input = "복잡한 세상 편하게 살자";
initial(input);
