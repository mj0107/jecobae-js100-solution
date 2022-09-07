/**
 * 1부터 (num - 1)까지의 합
 * @description
 * 만약 참가 인원이 num명이라면 각자 (num-1)까지 악수를 하게 된다.
 *
 * 기존에 1~num 까지의 합이 num * (num + 1) / 2 이지만,
 *
 * 시그마 공식은 (수의 갯수) * (첫번째 수 + 끝수) / 2 이므로,
 *
 * (num - 1) * (1 + num - 1) / 2 가 된다.
 *
 * @param {Number} num
 * @returns {Number}
 */
function sigma(num) {
  return (num * (num - 1)) / 2;
}

/**
 * 민규의 악수 횟수를 얻는 함수
 * @param {Number} n 행사에서 진행된 악수 횟수
 * @param {Number} participants_cnt 행사 참가자 수
 * @returns {Number} 민규의 악수 횟수
 */
function getMinGyuHandshakeCount(n, participants_cnt) {
  // 민규는 악수 도중에 가버렸으므로 -1
  return n - sigma(participants_cnt - 1);
}

/**
 * 행사 참가자 수를 얻는 함수
 * @param {Number} n 행사에서 진행된 악수 횟수
 * @returns {Number} 행사 참가자 수
 */
function getParticipantsCount(n) {
  let result = 0;

  while (sigma(result) < n) {
    result++;
  }

  return result;
}

function solution(n) {
  const participants_cnt = getParticipantsCount(n);
  const mingyu_handshake_cnt = getMinGyuHandshakeCount(n, participants_cnt);

  const result = [mingyu_handshake_cnt, participants_cnt];

  console.log(result);
}

const n = 59;
solution(n);
