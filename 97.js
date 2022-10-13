function solution() {
  const DILIVERY_MAN_COUNT = 3;
  let deliveryTime = [1, 2, 1, 3, 3, 3];

  let arr = Array.from({ length: DILIVERY_MAN_COUNT }, () => 0);
  let result = 0;

  while (deliveryTime.length !== 0) {
    for (let i = 0; i < DILIVERY_MAN_COUNT; i += 1) {
      if (arr[i] === 0 && deliveryTime.length !== 0) {
        arr[i] = deliveryTime.shift();
      }
    }
    arr.map((_, idx) => (arr[idx] -= 1));
    result += 1;
  }

  result += Math.max(...arr);

  console.log(result);
}

solution();
