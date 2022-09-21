/**
 * 노드의 연결관계, 시작 노드, 도착 노드를 매개변수로 받아서
 *
 * 시작 노드에서 도착 노드로 가기 위한 최대 거리를 구하는 함수
 *
 * @param {Object} graph 노드의 연결 관계
 * @param {Number} start 시작 노드
 * @param {Number} end 도착 노드
 * @returns {Number} 도착 노드까지 가기위한 최장경로의 간선의 개수
 */
function findTheLongestPath(graph, start, end) {
  let result;
  let max = 0;

  /**
   * 최장 경로를 찾기 위한 탐색 (DFS)
   * @param {Number} vertex 노드
   * @param {Object} visited 방문한 노드를 저장하는 object
   * @param {Number[]} route 경로를 저장하는 배열
   * @param {Number} distance 거리(= depth)
   */
  function dfs(vertex, visited = {}, route = [], distance = -1) {
    distance += 1;

    if (!vertex) return; // 만약 다음 노드가 없다면 dfs 종료

    visited = { ...visited };
    visited[vertex] = true; // 현재 노드 방문 처리

    route = [...route];
    route.push(vertex); // 현재 노드를 경로에 넣어줌

    // 종료 노드에 도달했을 경우
    if (vertex === end) {
      if (distance > max) {
        max = distance;
        result = route;
        return;
      }
    }
    graph[vertex].forEach((neighbor) => {
      if (!visited[neighbor]) {
        // 이웃 노드가 방문한 노드가 아닐경우
        // 거리(= depth)를 하나 증가시켜서 dfs
        dfs(neighbor, visited, route, distance);
      }
    });
  }
  dfs(start);

  // result는 최장 경로로 가기 위한 vertex의 집합이므로,
  // 간선의 개수는 vertex의 개수보다 하나 작다.
  return max;
}

const graph = {
  1: [2, 3, 4],
  2: [1, 3, 4, 5, 6],
  3: [1, 2, 7],
  4: [1, 2, 5, 6],
  5: [2, 4, 6, 7],
  6: [2, 4, 5, 7],
  7: [3, 5, 6],
};

const result = findTheLongestPath(graph, 1, 7);
console.log(result);
