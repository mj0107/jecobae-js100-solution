/**
 * 행렬 2개가 곱연산이 가능한지 판단하는 함수
 * @param {Number[]} matrix1
 * @param {Number[]} matrix2
 * @returns {Boolean} 곱연산이 가능하다면 true, 불가능하다면 false 리턴
 */
function isMultiplyPossible(matrix1, matrix2) {
  const [matrix1_row, matrix1_col] = [matrix1.length, matrix1[0].length];
  const [matrix2_row, matrix2_col] = [matrix2.length, matrix2[0].length];

  if (matrix1_row === matrix2_col && matrix1_col === matrix2_row) return true;
  return false;
}

/**
 * 행렬 2개를 곱해서 결과를 출력하는 함수
 * @param {Number} matrix1
 * @param {Number} matrix2
 */
function printMultiply(matrix1, matrix2) {
  let result = [];

  for (let i = 0; i < matrix1.length; i++) {
    let row = [];
    for (let j = 0; j < matrix2[0].length; j++) {
      let tmp = 0;
      for (let k = 0; k < matrix2[0].length; k++) {
        tmp += matrix1[i][k] * matrix2[k][j];
      }
      row.push(tmp);
    }
    result.push(row);
  }

  console.log(result);
}

function solution(matrix1, matrix2) {
  if (isMultiplyPossible(matrix1, matrix2)) printMultiply(matrix1, matrix2);
}

const a = [
  [1, 2],
  [2, 4],
];
const b = [
  [1, 0],
  [0, 3],
];

solution(a, b);
