/**
 * 탐색할 인덱스가 범위를 벗어나지 않는지 확인하는 함수
 *
 * @param {Number} searchX 탐색할 행
 * @param {Number} searchY 탐색할 열
 * @param {Number} MAX_ROW 최대 행의 수
 * @param {Number} MAX_COL 최대 열의 수
 * @returns {Boolean} 유효하면 true, 유요하지 않으면 false
 */
function isValidIndex(searchX, searchY, MAX_ROW, MAX_COL) {
  if (searchX < 0 || searchY < 0 || searchX > MAX_ROW || searchY > MAX_COL) {
    return false;
  }
  return true;
}

/**
 * 깃발의 위치를 입력받아 지뢰와 함께 출력해주는 함수
 *
 * @param {String} flag 깃발의 위치
 */
function printFlagAndMine(flag) {
  flag = flag.split('\n');
  const SEARCH_DIRECTION = [
    [-1, 0], // 상
    [1, 0], // 하
    [0, -1], // 좌
    [0, 1], // 우
  ];

  flag.forEach((el, idx) => {
    flag[idx] = el.replaceAll('1', 'f').split(' ');
  });

  let rowIdx = 0;
  let colIdx = 0;
  const MAX_ROW = flag.length - 1;
  const MAX_COL = flag[0].length - 1;

  for (let row of flag) {
    for (let area of row) {
      if (area === 'f') {
        for (const DIR of SEARCH_DIRECTION) {
          const [dx, dy] = DIR;

          const [searchX, searchY] = [rowIdx + dx, colIdx + dy];
          if (isValidIndex(searchX, searchY, MAX_ROW, MAX_COL)) {
            if (flag[searchX][searchY] === '0') flag[searchX][searchY] = '*';
          }
        }
      }
      colIdx += 1;
    }
    colIdx = 0;
    rowIdx += 1;
  }

  console.log(flag);
}

let flag = '0 1 0 0 0\n0 0 0 0 0\n0 0 0 1 0\n0 0 1 0 0\n0 0 0 0 0';

printFlagAndMine(flag);
