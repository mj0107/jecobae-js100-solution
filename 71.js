/**
 * 깊이 우선 탐색
 * @param {Object} graph 리스트 형태로 노드들의 연결 관계가 담긴 오브젝트
 * @param {String} start 출발 노드(= 최상위 노드)
 * @returns {String} DFS 방법으로 탐색했을 때의 거치는 노드 순서
 */
function DFS(graph, start) {
  let queue = [start];
  let visited = [];

  while (queue.length !== 0) {
    let node = queue.shift();

    if (!visited.includes(node)) {
      visited.push(node);

      let sub = graph[node].filter((el) => !visited.includes(el));
      queue = [...sub, ...queue];
    }
  }

  return visited.join(" ");
}

const graph = {
  E: ["D", "A"],
  F: ["D"],
  A: ["E", "C", "B"],
  B: ["A"],
  C: ["A"],
  D: ["E", "F"],
};

const result = DFS(graph, "E");
console.log(result);
