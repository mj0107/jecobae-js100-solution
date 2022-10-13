function solution() {
  const INPUT = '1번: 4,2,3 2번: 3 3번: 2,3,4,1 4번: 2,3';

  const KIND_LIST = INPUT.split(/[0-9]번: /);
  KIND_LIST.shift();

  let uniqueClothList = new Set();
  for (const KIND of KIND_LIST) {
    const CLOTH_LIST = KIND.trim().split(',').map(Number);

    for (const CLOTH of CLOTH_LIST) {
      uniqueClothList.add(CLOTH);
    }
  }

  console.log([...uniqueClothList]);
}

solution();
