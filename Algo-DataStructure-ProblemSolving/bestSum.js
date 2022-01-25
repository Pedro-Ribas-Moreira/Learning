const bestSum = (n, numbers) => {
  if (n === 0) return [];
  if (n < 0) return null;

  let shortestCombination = null;

  for (let num of numbers) {
    const reminder = n - num;
    const reminderResult = bestSum(reminder, numbers);
    if (reminderResult !== null) {
      const combination = [...reminderResult, num];
      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
      }
    }
  }

  return shortestCombination;
};

console.log(bestSum(7, [2, 3]));
console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(7, [2, 4]));
console.log(bestSum(8, [2, 3, 5]));
// console.log(bestSum(300, [7, 14]));
