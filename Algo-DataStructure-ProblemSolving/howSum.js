const howSum = (n, numbers, memo = {}) => {
  if (n in memo) return memo[n];
  if (n === 0) return [];
  if (n < 0) return null;

  for (let num of numbers) {
    const reminder = n - num;
    const reminderResult = howSum(reminder, numbers, memo);
    if (reminderResult !== null) {
      return [...reminderResult, num];
    }
  }

  memo[n] = null;
  return null;
};

console.log(howSum(7, [2, 3]));
console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(7, [2, 4]));
console.log(howSum(8, [2, 3, 5]));
console.log(howSum(300, [7, 14]));
