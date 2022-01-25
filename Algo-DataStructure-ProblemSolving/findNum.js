const bubbleSort = (inputArr) => {
  let n = inputArr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (inputArr[i] < inputArr[j]) {
        let tmp = inputArr[i];
        inputArr[i] = inputArr[j];
        inputArr[j] = tmp;
      }
    }
  }
  return inputArr;
};

const splitMiddle = (arr, n)=>{
  let lp; 
  let rp; 
  let pivot = Math.floor(arr.length/2)
  
  let found = false;
  if(n = arr[pivot]){
    return found = true
  }else if(n < arr[pivot]){
     splitMiddle(arr)
  }
  for(let i = 0; i )
}

const findNumber = (arr, k) => {
  const newArr = bubbleSort(arr);
  let found = "NO";
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === k) {
      return (found = "YES");
    }
  }
  return found;
};

const checkArray = [
  6, 4, 3, 4, 15, 55, 12, 76, 87, 342, 656, 72, 51, 76, 452, 7,
];
console.log(bubbleSort(checkArray));
console.log(findNumber(checkArray, 9));
console.log(findNumber(checkArray, 51));
