const gradingStudents = (grades) => {
  let n = grades.length;
  let newGrades = [];
  for (let i = 0; i < n; i++) {
    if (grades[i] < 40) {
      newGrades.push(grades[i]);
    }
    if (grades[i] > 40) {
      newGrades.push(multipleOfFive(grades[i]));
    }
  }

  console.log(newGrades);
};

const multipleOfFive = (n) => {
  let arr = [];
  let j = 0;
  let newGrade = n;

  while (j < 101) {
    if (j % 5 === 0) {
      arr.push(j);
    }
    j++;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] - n <= 2 && arr[i] - n > 0) {
      newGrade = arr[i];
    }
  }
  console.log(newGrade);
  return newGrade;
};

gradingStudents([73, 68, 67, 38, 33]);
multipleOfFive(68);
multipleOfFive(67);
