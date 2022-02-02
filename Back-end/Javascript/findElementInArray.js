const students = ["Pedro", "Amanda", "Zoe"];
const grades = [10, 5, 1];

let listOfStudents = [students, grades];

const showGrade = (name) => {
  if (listOfStudents[0].includes(name)) {
    let index = listOfStudents[0].indexOf(name);
    return `${listOfStudents[0][index]} your grade is: ${listOfStudents[1][index]}`;
  } else {
    return `student not found`;
  }
};

console.log(showGrade("Pedro"));
console.log(showGrade("Amanda"));
console.log(showGrade("John"));
