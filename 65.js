function deformedList(a, b) {
  let result = Array.from({ length: a.length }, () => Array(2));

  let [idx_a, idx_b] = [0, 1];

  for (let i = 0; i < a.length; i++) {
    result[i][idx_a] = a[i];
    result[i][idx_b] = b[i];

    idx_a ^= 1;
    idx_b ^= 1;
  }

  console.log(result);
}

const a = [1, 2, 3, 4];
const b = ["a", "b", "c", "d"];

deformedList(a, b);
