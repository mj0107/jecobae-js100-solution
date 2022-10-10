/**
 * 2차원 배열로 구성된 도장과 회전 횟수를 인자로 받아,
 * 회전 횟수만큼 돌린 도장을 return 해주는 함수
 *
 * @param {number[][]} STAMP 도장
 * @param {number} ROTATE_COUNT 회전 횟수
 * @returns {number[][]} 오른쪽으로 90도 회전한 도장 return
 */
function getRotateStamp(STAMP, ROTATE_COUNT) {
  let rotateStamp = [];
  const STAMP_ROW = STAMP.length;
  const STAMP_COL = STAMP[0].length;

  for (let cnt = 1; cnt <= ROTATE_COUNT; cnt += 1) {
    for (let col = 0; col < STAMP_COL; col += 1) {
      let rowArray = [];
      for (let row = 0; row < STAMP_ROW; row += 1) {
        rowArray.push(STAMP[row][col]);
      }
      rowArray.reverse();
      rotateStamp.push(rowArray);
    }
    STAMP = rotateStamp;
    rotateStamp = [];
  }

  return STAMP;
}

/**
 * 기존 도장과 회전한 도장의 합을 구하는 함수
 *
 * @param {number[][]} STAMP 기존 도장
 * @param {number[][]} ROTATE_STAMP 회전한 도장
 * @returns {number[][]} 두 배열의 합 return
 */
function getStampSum(STAMP, ROTATE_STAMP) {
  let result = [];
  const STAMP_ROW = STAMP.length;
  const STAMP_COL = STAMP[0].length;

  let stampValue = 0;
  let rotateStampValue = 0;
  for (let i = 0; i < STAMP_ROW; i += 1) {
    let tmp = [];
    for (let j = 0; j < STAMP_COL; j += 1) {
      stampValue = STAMP[i][j];
      rotateStampValue = ROTATE_STAMP[i][j];
      tmp.push(stampValue + rotateStampValue);
    }
    result.push(tmp);
  }

  return result;
}

function solution() {
  const STAMP = [
    [1, 1, 1, 2],
    [2, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
  ];
  const ROTATE_COUNT = 1;

  const ROTATE_STAMP = getRotateStamp(STAMP, ROTATE_COUNT);
  const RESULT = getStampSum(STAMP, ROTATE_STAMP);

  console.log(RESULT);
}

solution();
