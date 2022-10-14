function solution() {
  let stoneDurabilityArr = [1, 2, 1, 4, 5, 2];
  const RABBIT_JUMP_POWER_ARR = [2, 1, 3, 1];

  const BRIDGE_LENGTH = stoneDurabilityArr.length;

  let result = [];

  let isPossiblePassed = true;
  for (const POWER of RABBIT_JUMP_POWER_ARR) {
    isPossiblePassed = true;
    for (let i = POWER - 1; i < BRIDGE_LENGTH; i += POWER) {
      stoneDurabilityArr[i] -= 1;
      if (stoneDurabilityArr[i] < 0) {
        isPossiblePassed = false;
        break;
      }
    }

    if (isPossiblePassed) result.push('pass');
    else result.push('fail');
  }

  console.log(result);
}

solution();
