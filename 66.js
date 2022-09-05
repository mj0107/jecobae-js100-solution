function blockTowerStack(towers, rule) {
  let result = [];

  for (const tower of towers) {
    let rule_idx = [];

    rule.split("").forEach((v) => rule_idx.push(tower.indexOf(v)));
    rule_idx = rule_idx.filter((v) => v !== -1);

    if (rule_idx.join() === rule_idx.sort((a, b) => a - b).join())
      result.push("가능");
    else result.push("불가능");
  }

  console.log(result);
}

const towers = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"];
const rule = "ABD";

blockTowerStack(towers, rule);
