/**
 * 그래프와 시작노드, 도착노드를 입력받아 시작노드로부터 도착노드까지의
 *
 * 최단 경로를 구하는 함수
 * @param {Object} graph 리스트 형태로 주어진 노드의 연결 관계
 * @param {String} start 시작 노드
 * @param {String} end 도착 노드
 * @returns {Number} 최단 거리
 */
function findTheShortestPath(graph, start, end) {
  let queue = [start];
  let visited = [start];
  let cnt = 0;

  while (queue.length !== 0) {
    for (let i = 0; i < queue.length; i++) {
      let node = queue.shift();

      if (node == end) return cnt;

      const sub = graph[node].filter((el) => !visited.includes(el));
      visited.push(...sub);
      queue.push(...sub);
    }

    cnt += 1;
  }

  return cnt;
}

const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};

const result = findTheShortestPath(graph, "A", "F");
console.log(result);
