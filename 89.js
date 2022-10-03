/**
 * 지도의 크기, 장애물의 위치, 캐릭터의 위치를 입력받아
 * 게임 지형을 완성해 출력해주는 함수
 *
 * @description
 * - 움직일 수 있는 공간(0)
 * - 캐릭터(1)
 * - 벽(2)
 *
 * @param {number} ROW 행의 개수
 * @param {number} COL 열의 개수
 * @param {number[]} CHARACTER_POS 캐릭터 위치
 * @param {number[][]} OBSTACLE_POS_ARR 장애물들의 위치가 담긴 배열
 */
function printMapBeforeMove(ROW, COL, CHARACTER_POS, OBSTACLE_POS_ARR) {
  let map = Array.from({ length: ROW + 2 }, () => new Array(COL + 2).fill(2));

  for (let i = 1; i <= ROW; i++) {
    for (let j = 1; j <= COL; j++) {
      map[i][j] = 0;
    }
  }

  // 캐릭터 위치
  const [CHARACTER_POS_ROW, CHARACTER_POS_COL] = CHARACTER_POS;
  map[CHARACTER_POS_ROW + 1][CHARACTER_POS_COL + 1] = 1;

  // 장애물
  for (const OBSTACLE_POS of OBSTACLE_POS_ARR) {
    const [OBSTACLE_POS_ROW, OBSTACLE_POS_COL] = OBSTACLE_POS;

    map[OBSTACLE_POS_ROW + 1][OBSTACLE_POS_COL + 1] = 2;
  }

  console.log('캐릭터 이동 전 지도');
  map.forEach((row) => console.log(row));
  console.log('\n');

  return map;
}

/**
 * 지도와 이동할 행,열을 인자로 받아서
 * 해당 행,열로 이동이 가능한지 반환하는 함수
 *
 * @param {number[][]} MAP 지도
 * @param {number} row 이동할 행
 * @param {number} col 이동할 열
 * @returns {boolean} 가능하면 true, 불가능하면 false return
 */
function isPossibleMove(MAP, row, col) {
  return MAP[row][col] === 0;
}

/**
 * 지도와 캐릭터의 움직임이 담긴 배열을 인자로 받아서
 * 이동 후의 지도를 출력해주는 함수
 *
 * 캐릭터의 움직임은 { 상:1, 하:2, 좌:3, 우:4 }로 이루어져 있다.
 *
 * @param {number[][]} MAP 지도
 * @param {number[]} MOVE_ARR 이동방향이 담긴 배열
 */
function printMapAfterMove(MAP, MOVE_ARR) {
  const MOVE_OBJ = {
    1: [-1, 0], // 상
    2: [1, 0], // 하
    3: [0, -1], // 좌
    4: [0, 1], // 우
  };

  let firstPosition = [];
  let currentRow = 0;
  let currentCol = 0;
  for (let i = 1; i < MAP.length; i++) {
    // indexOf는 값을 찾지못할경우 -1을 반환한다.
    // 따라서 1(캐릭터)이 있을경우에만 진행한다는 뜻
    if (MAP[i].indexOf(1) > -1) {
      currentRow = i;
      currentCol = MAP[i].indexOf(1);
      firstPosition = [currentRow, currentCol];
      break;
    }
  }
  // 이동할 것이기 때문에 맨 처음 위치는 0(빈공간)으로 초기화
  MAP[currentRow][currentCol] = 0;

  let movePosition = [];
  let moveRow = 0;
  let moveCol = 0;
  let afterMoveRow = 0;
  let afterMoveCol = 0;
  for (const MOVE of MOVE_ARR) {
    movePosition = MOVE_OBJ[MOVE];
    [moveRow, moveCol] = movePosition;

    afterMoveRow = currentRow + moveRow;
    afterMoveCol = currentCol + moveCol;

    if (isPossibleMove(MAP, afterMoveRow, afterMoveCol)) {
      currentRow = afterMoveRow;
      currentCol = afterMoveCol;
    }
  }

  // 이동을 다 마친후의 위치
  MAP[currentRow][currentCol] = 1;

  console.log('캐릭터 이동 후 지도');
  MAP.forEach((row) => console.log(row));
  console.log(`캐릭터위치 : [${currentRow}, ${currentCol}]`);
}

const COL = 4; // 가로(열)
const ROW = 5; // 세로(행)
const CHARACTER_POS = [0, 0];
const OBSTACLE_POS_ARR = [
  [0, 1],
  [1, 1],
  [2, 3],
  [1, 3],
];

const MAP = printMapBeforeMove(ROW, COL, CHARACTER_POS, OBSTACLE_POS_ARR);

const MOVE_ARR = [2, 2, 2, 4, 4, 4];
let mapAfterMove = printMapAfterMove(MAP, MOVE_ARR);
