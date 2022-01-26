// https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let appleTree = a;
  let orangeTree = b;

  let applesTotal = 0;
  let orangesTotal = 0;

  for (let i = 0; i < apples.length; i++) {
    let result = appleTree + apples[i];
    if (result >= s && result <= t) {
      applesTotal++;
    }
  }
  for (let i = 0; i < oranges.length; i++) {
    let result = orangeTree + oranges[i];
    if (result >= s && result <= t) {
      orangesTotal++;
    }
  }

  console.log(applesTotal);
  console.log(orangesTotal);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
