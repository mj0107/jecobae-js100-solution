/**
 * n까지의 인덱스를 가진 배열에서 n이 소수라면 true, 아니라면 false를 해주고
 *
 * 그 배열을 리턴해주는 함수
 * @param {Number} n 2보다 큰 짝수
 * @param {Boolean[]} arr true로 초기화된 n의 길이를 가진 배열
 * @returns {Boolean[]} n의 길이를 가진 각 인덱스가 소수인지 아닌지 판별 완료된 배열
 */
function isPrime(n, arr) {
  for (let i = 2; i * i <= n; i++) {
    if (arr[i] === true) {
      for (let j = i * 2; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }

  return arr;
}
/**
 * 모든 골드바흐 파티션을 출력해주는 함수
 * @param {Number} n 2보다 큰 짝수
 * @param {Boolean[]} prime_arr n의 길이를 가진 각 인덱스가 소수인지 아닌지 판별 완료된 배열
 */
function printAllGoldbach(n, prime_arr) {
  for (let i = 2; i <= n; i++) {
    for (let j = 2; j <= n; j++) {
      if (prime_arr[i] && prime_arr[j] && i + j === n) {
        console.log(`${i + j} == ${i} + ${j}`);
      }
    }
  }
}

/**
 * 가장 차이가 작은 골드바흐 파티션을 출력해주는 함수
 * @param {Number} n 2보다 큰 짝수
 * @param {Boolean[]} prime_arr n의 길이를 가진 각 인덱스가 소수인지 아닌지 판별 완료된 배열
 */
function printMinDistanceGoldbach(n, prime_arr) {
  for (let i = 2; i <= n; i++) {
    for (let j = 2; j <= n; j++) {
      if (prime_arr[i] && prime_arr[j] && i + j === n) {
        if (i >= j) {
          console.log(`${i + j} == ${j} + ${i}`);
          console.log(`${i + j} == ${i} + ${j}`);
          return;
        }
      }
    }
  }
}

/**
 * 가장 차이가 큰 골드바흐 파티션을 출력해주는 함수
 * @param {Number} n 2보다 큰 짝수
 * @param {Boolean[]} prime_arr n의 길이를 가진 각 인덱스가 소수인지 아닌지 판별 완료된 배열
 */
function printMaxDistanceGoldbach(n, prime_arr) {
  for (let i = 2; i <= n; i++) {
    for (let j = 2; j <= n; j++) {
      if (prime_arr[i] && prime_arr[j] && i + j === n) {
        console.log(`${i + j} == ${i} + ${j}`);
        console.log(`${i + j} == ${j} + ${i}`);
        return;
      }
    }
  }
}

function solution(n) {
  let prime_arr = Array.from({ length: n }, () => true);
  prime_arr[0] = prime_arr[1] = false;

  prime_arr = isPrime(n, prime_arr);

  printAllGoldbach(n, prime_arr);
  console.log("---------------------------------------");
  printMinDistanceGoldbach(n, prime_arr);
  console.log("---------------------------------------");
  printMaxDistanceGoldbach(n, prime_arr);
}

const n = 100;
solution(n);
