function solution(country_area) {
  // 한국의 면적 저장
  const korea_area = country_area["korea"];
  // 객체에서 한국에 대한 정보 삭제
  delete country_area.korea;

  // [나라, 면적]을 배열로 저장
  let area_entries = Object.entries(country_area);
  // 면적의 값만 배열로 저장
  let areas = Object.values(country_area);

  for (let i = 0; i < areas.length; i++) {
    // 면적의 차이 구하기
    areas[i] = Math.abs(areas[i] - korea_area);
    area_entries[i][1] = Math.abs(area_entries[i][1] - korea_area);
  }

  // 면적의 차이가 가장 작은 면적 구하기
  const similar_area = Math.min(...areas);
  // 가장 면적이 비슷한 나라 구하기
  const similar_country = area_entries
    .filter((el) => el[1] === similar_area)
    .flat();

  console.log(...similar_country);
}

const country_area = {
  korea: 220877,
  Russia: 17098242,
  China: 9596961,
  France: 543965,
  Japan: 377915,
  England: 242900,
};
solution(country_area);
