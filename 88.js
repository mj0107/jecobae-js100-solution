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
function printMap(ROW, COL, CHARACTER_POS, OBSTACLE_POS_ARR) {
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

  map.forEach((row) => {
    console.log(row);
  });
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

printMap(ROW, COL, CHARACTER_POS, OBSTACLE_POS_ARR);
