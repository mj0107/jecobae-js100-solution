/**
 * 정보를 받아 월급을 두번으로 나눠주는 함수
 *
 * @param {string} INPUT '직원,'월급','은행','계좌''가 담긴 문자열
 * @returns {string[]} 월급을 두번으로 나눈 정보
 */
function divideSalary(INPUT) {
  const EMPLOYEE_LIST = INPUT.split('\n').map((el) => el.trim());
  let result = [];

  for (let employee of EMPLOYEE_LIST) {
    const [_, SALARY] = employee.split("'");

    let salary1 = '';
    let salary2 = '';

    for (let el of SALARY) {
      if (el === ',') {
        continue;
      } else if (el == 3) {
        salary1 += '1';
        salary2 += '2';
      } else if (el == 4) {
        salary1 += '2';
        salary2 += '2';
      } else if (el == 6) {
        salary1 += '1';
        salary2 += '5';
      } else {
        salary1 += el;
        salary2 += '0';
      }
    }
    salary1 = parseInt(salary1).toLocaleString();
    salary2 = parseInt(salary2).toLocaleString();

    employee = employee.replace(SALARY, `${salary1}','${salary2}`);

    result.push(employee);
  }

  return result;
}

function solution() {
  const INPUT = `이대표,'333,356,766','S은행','100-0000-0000-001
                 최차장,'5,000,000','S은행','100-0000-0000-002'
                 이과장,'3,200,000','S은행','100-0000-0000-003'
                 홍팀장,'3,300,000','S은행','100-0000-0000-004'
                 이대리,'5,300,000','S은행','100-0000-0000-005'`;

  const result = divideSalary(INPUT);
  console.log(result);
}

solution();
