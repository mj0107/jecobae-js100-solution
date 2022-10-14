/**
 * 퍼즐의 점수를 나타낸 2차원 배열을 인자로 받아,
 * 오른쪽으로 90도를 돌린 배열을 반환하는 함수
 *
 * @param {number[][]} board 퍼즐의 점수를 나타낸 2차원 배열
 * @returns {number[][]} 오른쪽으로 90도 돌린 배열
 */
function getRotateBoard(board) {
  let rotateBoard = [];

  let tmp = [];
  for (let col = 0; col < board[0].length; col += 1) {
    tmp = [];
    for (let row = 0; row < board.length; row += 1) {
      tmp.push(board[row][col]);
    }
    tmp = tmp.filter((el) => el !== 0).reverse();
    rotateBoard.push(tmp);
  }

  return rotateBoard;
}

/**
 * 오른쪽으로 90도 돌린 보드와 조작할 위치가 담긴 리스트를 인자로 받아,
 * 규칙에 따라 점수를 반환하는 함수
 *
 * @param {number[][]} rotateBoard 오른쪽으로 90도 돌린 보드
 * @param {number[]} MOVE_LIST 조작할 위치가 담긴 리스트
 * @returns {number} 점수
 */
function getScore(rotateBoard, MOVE_LIST) {
  let stack = [];
  let score = 0;

  for (const MOVE of MOVE_LIST) {
    const SELECT_ROW = MOVE - 1;

    // 비어있는 곳 선택시 점수 1점 감소
    if (rotateBoard[SELECT_ROW].length === 0) {
      score -= 1;
      continue;
    }

    const SELECT_PUZZLE = rotateBoard[SELECT_ROW].pop();

    // 스택이 비어있으면 선택한 퍼즐 바로 push
    if (stack.length === 0) stack.push(SELECT_PUZZLE);
    else {
      // 스택이 비어있지 않으면
      // 스택의 top과 같은 것을 선택했을 시 스택에서도 pop해주고 점수 * 2를 더해줌
      if (stack.at(-1) === SELECT_PUZZLE) score += stack.pop() * 2;
      // top과 같지 않으면 그냥 push
      else stack.push(SELECT_PUZZLE);
    }
  }

  return score;
}

function solution() {
  let board = [
    [0, 0, 0, 0],
    [0, 1, 0, 3],
    [2, 5, 0, 1],
    [2, 4, 4, 1],
    [5, 1, 1, 1],
  ];
  const MOVE_LIST = [1, 1, 1, 1, 3, 3, 3];

  let rotateBoard = getRotateBoard(board);
  const SCORE = getScore(rotateBoard, MOVE_LIST);

  console.log(SCORE);
}

solution();
