/**
 * 너비 우선 탐색
 * @param {Object} graph 리스트 형태로 노드들의 연결 관계가 담긴 오브젝트
 * @param {String} start 출발 노드(= 최상위 노드)
 * @returns 너비 우선 탐색을 한 순서대로 노드의 인덱스를 공백으로 구분하여 리턴
 */
function BFS(graph, start) {
  const queue = [start];
  const visited = [];

  while (queue.length !== 0) {
    const node = queue.shift();

    if (!visited.includes(node)) {
      visited.push(node);

      let sub = graph[node].filter((el) => !visited.includes(el));

      queue.push(...sub);
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

const result = BFS(graph, "E");
console.log(result);
