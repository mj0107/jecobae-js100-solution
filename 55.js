const route = [];

function hanoi(num, start, temp, end) {
  // 원판이 한 개일 때에는 바로 옮기면 된다.
  if (num === 0) return;

  // n-1개를 경유기둥으로 옮기고
  hanoi(num - 1, start, end, temp);
  // 가장 큰 원판은 목표 기둥으로
  route.push([start, end]);
  // 경유기둥과 시작기둥을 바꾼다.
  hanoi(num - 1, temp, start, end);
}

hanoi(3, "A", "B", "C");
console.log(route);
console.log(route.length);
