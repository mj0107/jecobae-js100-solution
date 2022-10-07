function getRuntimeWithLRU(PAGE_LIST, MEMORY_SIZE, RUNTIME_INFO) {
  const { HIT, MISS } = RUNTIME_INFO;
  let memory = [];
  // 오랫동안 사용되지 않은 페이지가 순서대로 담겨있는 리스트
  let leastUsedList = [];
  let runTime = 0;

  for (const PAGE of PAGE_LIST) {
    // 들어온 페이지가 사용빈도 순서로 담겨있는 리스트에 이미 페이지가 있으면
    if (leastUsedList.includes(PAGE)) {
      const PAGE_INDEX = leastUsedList.indexOf(PAGE);
      // 해당하는 페이지가 있는 곳을 비우고
      leastUsedList.splice(PAGE_INDEX, 1);
    }
    // 맨 뒤(가장 최신)에 넣어줌
    leastUsedList.push(PAGE);

    // PAGE가 메모리에 이미 있다면, HIT
    if (memory.includes(PAGE)) runTime += HIT;
    // PAGE가 메모리에 없다면,
    else {
      // 메모리가 꽉 찼을 경우는
      if (memory.length === MEMORY_SIZE) {
        // 사용빈도 순서로 담겨있는 페이지 리스트의
        // 맨 앞(사용빈도가 제일 적음)의 페이지를
        const LRU_PAGE = leastUsedList.shift();
        // 메모리에서 찾아서
        const LRU_PAGE_INDEX = memory.indexOf(LRU_PAGE);

        // 페이지를 교체해줌
        memory.splice(LRU_PAGE_INDEX, 1, PAGE);
      } else memory.push(PAGE);
      runTime += MISS;
    }

    console.log(memory);
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

  const result = getRuntimeWithLRU(PAGE_LIST, MEMORY_SIZE, RUNTIME_INFO);
  console.log(result); // 33
}

solution();
