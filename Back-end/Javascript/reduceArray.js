const classJavascript = [10, 9, 5, 8, 10];
const classGolang = [10, 9, 5, 8, 10];
const classPython = [10, 9, 5, 8, 10];

const average = (classGrades) => {
  const sumOFGrades = classGrades.reduce((sum, element) => sum + element, 0);
  return sumOFGrades / classGrades.length;
};

console.log(`Javascript class average: ${average(classJavascript)}`);
console.log(`Golang class average: ${average(classGolang)}`);
console.log(`Python class average: ${average(classPython)}`);

const grades = [10, 5.5, 7.4, 8, 9.5];
const newAverage =
  grades.reduce((sum, element) => sum + element) / grades.length;

console.log(newAverage);
