function calculateGrade() {
  const totalMarks = document.getElementById("totalMarks").value;
  let grade;

  if (totalMarks >= 90) {
    grade = "A";
  } else if (totalMarks >= 85 && totalMarks <= 89) {
    grade = "A-";
  } else if (totalMarks >= 80 && totalMarks <= 84) {
    grade = "B+";
  } else if (totalMarks >= 75 && totalMarks <= 79) {
    grade = "B";
  } else if (totalMarks >= 70 && totalMarks <= 74) {
    grade = "B-";
  } else if (totalMarks >= 65 && totalMarks <= 69) {
    grade = "C+";
  } else if (totalMarks >= 60 && totalMarks <= 64) {
    grade = "C";
  } else if (totalMarks >= 55 && totalMarks <= 59) {
    grade = "C-";
  } else if (totalMarks >= 50 && totalMarks <= 54) {
    grade = "D+";
  } else if (totalMarks >= 50 && totalMarks <= 54) {
    grade = "D";
  } else {
    grade = "F";
  }
  document.getElementById("gradeResult").innerHTML = "Your Grade is  " + grade;
};
