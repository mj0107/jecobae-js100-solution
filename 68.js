/**
 * 버스 시간과 현재의 시간을 인자로 받아서 지나갔는지,
 *
 * 안지나갔다면 얼마나 남았는지 알려주는 함수
 *
 * @param {String} bus_time 버스가 오는 시간
 * @param {String} current_time 현재 시간
 * @returns {String} 버스 시간이 지났다면 "지나갔습니다", 아니라면 남은시간 return
 */
function getRemainTime(bus_time, current_time) {
  const [bus_hours, bus_minutes] = bus_time.split(":").map(Number);
  const [cur_hours, cur_minutes] = current_time.split(":").map(Number);

  const bus_total_minutes = bus_hours * 60 + bus_minutes;
  const cur_total_minutes = cur_hours * 60 + cur_minutes;

  const time_interval = bus_total_minutes - cur_total_minutes;

  if (time_interval < 0) return "지나갔습니다";
  else {
    remain_hours = parseInt(time_interval / 60)
      .toString()
      .padStart(2, "0");
    remain_minutes = (time_interval % 60).toString().padStart(2, "0");

    return `${remain_hours}시간 ${remain_minutes}분`;
  }
}

function solution(bus_times, current_time) {
  let result = [];

  bus_times.forEach((bus_time) => {
    result.push(getRemainTime(bus_time, current_time));
  });

  console.log(result);
}

const bus_times = ["12:30", "13:20", "14:13"];
const current_time = "12:40";

solution(bus_times, current_time);
