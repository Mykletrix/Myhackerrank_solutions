'use strict'
const gradingStudents = (grades) => {
  return grades.map(grade => {
    const round = Math.ceil((grade + 1)/5) * 5;
    return (round - grade < 3) && grade >= 38 ? round : grade;
  });
}
console.log(gradingStudents([31,43,56,79,91,94]));