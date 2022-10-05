/**
 * 반의 수, 학생 수, 과목 수가 담긴 객체를 받아 랜덤으로
 * 반 점수 모두가 담긴 전교 점수 다중 리스트를 만드는 함수
 *
 * @param {Object} INFO_OBJ 반의 수, 학생 수, 과목 수가 담긴 객체
 * @returns {number[][][]} 각 반으로 나누어진 리스트 return
 */
function makeRandomScoreList(INFO_OBJ) {
  const CLASS_NUM = INFO_OBJ.CLASS_NUM;
  const STUDENT_NUM = INFO_OBJ.STUDENT_NUM;
  const SUBJECT_NUM = INFO_OBJ.SUBJECT_NUM;

  let wholeSchoolScoreList = [];
  for (let i = 0; i < CLASS_NUM; i++) {
    let classScoreList = [];
    for (let j = 0; j < STUDENT_NUM; j++) {
      let studentScoreList = [];
      for (let k = 0; k < SUBJECT_NUM; k++) {
        studentScoreList.push(Math.floor(Math.random() * 100) + 1);
      }
      classScoreList.push(studentScoreList);
    }
    wholeSchoolScoreList.push(classScoreList);
  }

  return wholeSchoolScoreList;
}

/**
 * 전교 점수 다중 리스트를 받아,
 * 각 반의 평균을 구해서 리스트로 반환하는 함수
 *
 * @param {number[][][]} wholeSchoolScoreList 전교 점수 다중 리스트
 * @returns {number[]} 각 반의 평균
 */
function getClassAverage(wholeSchoolScoreList) {
  let classAverageList = [];

  let subjectNum = 0;
  for (const CLASS of wholeSchoolScoreList) {
    const STUDENT_NUM = CLASS.length;
    let studentAverageSum = 0;
    let classAverage = 0;
    for (const STUDENT_SCORE_LIST of CLASS) {
      subjectNum = STUDENT_SCORE_LIST.length;
      let studentSum = 0;
      for (const SCORE of STUDENT_SCORE_LIST) {
        studentSum += SCORE;
      }
      studentAverage = studentSum / subjectNum;
      studentAverageSum += studentAverage;
      classAverage = studentAverageSum / STUDENT_NUM;
    }
    classAverageList.push(classAverage);
  }

  return classAverageList;
}

/**
 * 전교 점수 다중 리스트를 받아
 * 각 반마다 1등 점수 리스트를 반환하는 함수
 *
 * @param {number[][][]} wholeSchoolScoreList 전교 점수 다중 리스트
 * @returns {number[][]} 각 반마다의 1등 점수 리스트
 */
function getClassFirstPlaceScore(wholeSchoolScoreList) {
  let firstPlaceScoreList = [];

  for (const CLASS of wholeSchoolScoreList) {
    let scoreSumList = [];
    for (const STUDENT_SCORE_LIST of CLASS) {
      let sum = STUDENT_SCORE_LIST.reduce((acc, cur) => (acc += cur));
      scoreSumList.push(sum);
    }

    const MAX_SUM = Math.max(...scoreSumList);
    const MAX_INDEX = scoreSumList.indexOf(MAX_SUM);

    firstPlaceScoreList.push(CLASS[MAX_INDEX]);
  }

  return firstPlaceScoreList;
}

/**
 * 각 반의 평균이 담긴 리스트를 받아
 * 전교 평균을 구하는 함수
 *
 * @param {number[]} classAverageList 각 반의 평균이 담긴 리스트
 * @returns {number} 전교 평균
 */
function getWholeSchoolAverage(classAverageList) {
  const CLASS_NUM = classAverageList.length;
  const WHOLE_SCHOOL_AVERAGE_SUM = classAverageList.reduce(
    (acc, cur) => (acc += cur)
  );
  const WHOLE_SCHOOL_AVERAGE = WHOLE_SCHOOL_AVERAGE_SUM / CLASS_NUM;

  return WHOLE_SCHOOL_AVERAGE;
}

function solution() {
  let wholeSchoolScoreList = [];
  let classAverageList = [];
  let firstPlaceScoreList = [];
  let wholeSchoolAverage = 0;

  const INFO_OBJ = {
    CLASS_NUM: 7,
    STUDENT_NUM: 30,
    SUBJECT_NUM: 5,
  };

  // 1. 반 점수 모두가 담긴 전교 점수 다중 리스트 만들기
  wholeSchoolScoreList = makeRandomScoreList(INFO_OBJ);
  // 2. 반 평균 구하기
  classAverageList = getClassAverage(wholeSchoolScoreList);
  // 3. 반 1등 점수 구하기
  firstPlaceScoreList = getClassFirstPlaceScore(wholeSchoolScoreList);
  // 4. 전교 평균 구하기
  wholeSchoolAverage = getWholeSchoolAverage(classAverageList);

  console.log('반 점수 모두가 담긴 전교 점수 다중 리스트');
  console.log(wholeSchoolScoreList);
  console.log('========================================');
  console.log('반 평균');
  console.log(classAverageList);
  console.log('========================================');
  console.log('반 1등 점수');
  console.log(firstPlaceScoreList);
  console.log('========================================');
  console.log('전교 평균');
  console.log(wholeSchoolAverage);
}

solution();
