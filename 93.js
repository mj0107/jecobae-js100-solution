/**
 * 적재할 페이지, 메모리 크기,
 * hit와 miss 일 때의 실행시간이 담긴 객체를 받아,
 * FIFO 페이지 교체 알고리즘을 실행할 때 총 실행시간을 구하는 함수
 *
 * @param {string} PAGE_LIST 적재할 페이지를 나열한 문자열
 * @param {number} MEMORY_SIZE 메모리의 크기
 * @param {Object} RUNTIME_INFO hit와 miss 일 때의 실행시간이 담긴 객체
 * @returns {number} 총 실행시간
 */
function getRuntimeWithFIFO(PAGE_LIST, MEMORY_SIZE, RUNTIME_INFO) {
  const { HIT, MISS } = RUNTIME_INFO;
  let frame = [];
  let runTime = 0;

  for (const PAGE of PAGE_LIST) {
    // PAGE가 메모리에 이미 있다면, HIT
    if (frame.includes(PAGE)) runTime += HIT;
    // PAGE가 메모리에 없다면,
    else {
      // 메모리가 꽉 찼을 경우는 제일 오래된 것 교체
      if (frame.length === MEMORY_SIZE) frame.shift();

      frame.push(PAGE);
      runTime += MISS;
    }
  }

  return runTime;
}

function solution() {
  const PAGE_LIST = 'BCBAEBCE';
  const MEMORY_SIZE = 3;
  const RUNTIME_INFO = {
    HIT: 1,
    MISS: 6,
  };

  const result = getRuntimeWithFIFO(PAGE_LIST, MEMORY_SIZE, RUNTIME_INFO);
  console.log(result); // 38
}

solution();
