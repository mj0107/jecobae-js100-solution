function countOne(n) {
  let cnt = 0;
  for (let i = 0; i <= n; i++) {
    cnt += String(i)
      .split("")
      .filter((el) => el === "1").length;
  }

  console.log(cnt);
}

countOne(1000);
