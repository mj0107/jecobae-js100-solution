/**
 * 음식을 먹은 그릇 개수를 파악한 후 각 선수들의 등수를 얻는 함수
 *
 * @param {string[]} PLAYER_ARR 각 선수의 이름이 담긴 배열
 * @param {number[]} DISH_COUNT_ARR 각 선수가 먹은 음식 그릇 개수가 담긴 배열
 * @returns {object} key:선수, value:등수 를 가지는 object return
 */
function getRank(PLAYER_ARR, DISH_COUNT_ARR) {
  let rank = [];
  let rankObj = {};

  for (let i = 0; i < PLAYER_ARR.length; i++) {
    rank.push([PLAYER_ARR[i], DISH_COUNT_ARR[i]]);
  }

  rank.sort((a, b) => b[1] - a[1]);
  rank.forEach((val, idx) => {
    const PLAYER = val[0];
    const RANK = idx + 1;

    rankObj[PLAYER] = RANK;
  });

  return rankObj;
}

// const PLAYER_ARR = ['손오공', '야모챠', '메지터', '비콜로'];
// const DISH_COUNT_ARR = [70, 10, 55, 40];

const PLAYER_ARR = ['홍길동', '엄석대', '연개소문', '김첨지'];
const DISH_COUNT_ARR = [2, 1, 10, 0];

const result = getRank(PLAYER_ARR, DISH_COUNT_ARR);
console.log(result);
