function numbering(students) {
  students.sort();

  students.forEach((student, idx) => {
    console.log(`번호: ${idx + 1}, 이름: ${student}`);
  });
}

const students = [
  "강은지",
  "김유정",
  "박현서",
  "최성훈",
  "홍유진",
  "박지호",
  "권윤일",
  "김채리",
  "한지호",
  "김진이",
  "김민호",
  "강채연",
];
numbering(students);
