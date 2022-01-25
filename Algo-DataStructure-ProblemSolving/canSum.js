const canSum = (n, numbers, memo = {}) => {
  if (n in memo) return memo[n];
  if (n === 0) return true;
  if (n < 0) return false;

  for (let num of numbers) {
    const reminder = n - num;
    if (canSum(reminder, numbers, memo) === true) {
      memo[n] === true;
      return true;
    }
  }
  memo[n] = false;
  return false;
};

console.log(canSum(4, [1, 4, 5, 6, 2]));
console.log(canSum(7, [5, 4, 3, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(301, [2, 4]));
