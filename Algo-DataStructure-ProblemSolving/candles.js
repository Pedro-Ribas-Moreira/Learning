function birthdayCakeCandles(candles) {
  let tallest = 0;
  let repeat = 0;

  for (let i = 0; i < candles.length; i++) {
    if (candles[i] > tallest) {
      tallest = candles[i];
    }
  }
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] === tallest) {
      repeat = repeat + 1;
    }
  }
  console.log(repeat);
}

birthdayCakeCandles([3, 2, 1, 3, 1, 2, 3, 3, 3, 3]);
