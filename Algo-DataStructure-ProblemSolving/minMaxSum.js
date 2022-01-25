function miniMaxSum(arr) {
  let minValue = 0;
  let maxValue = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
      // console.log(i + " " + j);
      if (i !== j) {
        console.log(i + " " + j);

        sum = sum + arr[j];
      }
    }
    if (sum > maxValue) {
      maxValue = sum;
    }
    if (minValue === 0 || sum < minValue) {
      minValue = sum;
    }
  }

  console.log(minValue + " " + maxValue);
}

miniMaxSum([1, 2, 3, 4, 5]);

// let minSum = 0;
// let maxSum = 0;
// // Write your code here
// for (let i = 0; i < arr.length; i++) {
//   let total = arr[i];
//   for (let j = 0; j < arr.length; j++) {
//     if (i != j) {
//       total += arr[j];
//     }
//     console.log(total);

//     console.log(total);
//   }
//   if (minSum === 0 || total <= minSum) {
//     minSum = total;
//   }
//   if (total >= maxSum) {
//     maxSum = total;
//   }

//   console.log(minSum + " " + maxSum);
// }
