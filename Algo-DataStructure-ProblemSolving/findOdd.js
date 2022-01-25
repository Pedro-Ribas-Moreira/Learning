const findOdds = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

const checkArray = [
  6, 4, 3, 4, 15, 55, 12, 76, 87, 342, 656, 72, 51, 76, 452, 7,
];
console.log(findOdds(checkArray));
console.log(findOdds(checkArray));
