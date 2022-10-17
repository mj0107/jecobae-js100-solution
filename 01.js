function solution1() {
  let nums = [100, 200, 300, 400, 500];

  nums.pop();
  nums.pop();

  console.log(nums);
}

function solution2() {
  let nums = [100, 200, 300, 400, 500];

  console.log(nums.splice(0, 3));
}

function solution3() {
  let nums = [100, 200, 300, 400, 500];

  console.log(nums.slice(0, 3));
}

solution1();
solution2();
solution3();
