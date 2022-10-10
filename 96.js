/**
 * 2차원 배열인 텃밭 배열을 받아,
 * 가장 넓은 텃밭의 크기와 만든 텃밭을 출력하는 함수
 *
 * @param {number[][]} GARDEN
 */
function makeWideGarden(GARDEN) {
  const ROW_COUNT = GARDEN.length;
  const COL_COUNT = GARDEN[0].length;

  // 깊은 복사
  let dp = JSON.stringify(GARDEN);
  // 0과 1을 서로 바꿔줌
  // 바위 = 0, 빈 공간 = 1
  dp = dp.replaceAll(1, '*').replaceAll(0, 1).replaceAll('*', 0);
  dp = JSON.parse(dp);

  let leftValue, upValue, upperLeftValue;
  let [maxRow, maxCol] = [0, 0];
  let max = -Infinity;
  for (let i = 1; i < ROW_COUNT; i += 1) {
    let min = Infinity;
    for (let j = 1; j < COL_COUNT; j += 1) {
      // 바위라면 continue
      if (dp[i][j] === 0) continue;

      leftValue = dp[i][j - 1];
      upValue = dp[i - 1][j];
      upperLeftValue = dp[i - 1][j - 1];

      // 위, 왼쪽, 왼쪽 위를 비교하여 최소값 찾기
      min = Math.min(leftValue, upValue, upperLeftValue);
      dp[i][j] = min + 1;

      if (max < dp[i][j]) {
        max = dp[i][j];
        [maxRow, maxCol] = [i, j];
      }
    }
  }

  const SQUARE_SIDE_LENGTH = max;
  const START_ROW = maxRow - SQUARE_SIDE_LENGTH + 1;
  const START_COL = maxCol - SQUARE_SIDE_LENGTH + 1;

  for (let i = START_ROW; i <= maxRow; i += 1) {
    for (let j = START_COL; j <= maxCol; j += 1) {
      GARDEN[i][j] = '#';
    }
  }
  console.log(`${SQUARE_SIDE_LENGTH} X ${SQUARE_SIDE_LENGTH}\n`);
  GARDEN.map((row) => {
    console.log(row.join(' '));
  });
}

function solution() {
  const GARDEN = [
    [0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0],
  ];

  makeWideGarden(GARDEN);
}

solution();
