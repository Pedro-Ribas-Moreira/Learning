// https://www.hackerrank.com/challenges/kangaroo/problem?isFullScreen=true&h_r=next-challenge&h_v=zen

function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  let i = 0;
  let kangaroo1 = x1;
  let kangaroo2 = x2;
  let result = "NO";

  while (i < 10) {
    console.log(`canguru 1: ${kangaroo1}  canguru 2 :${kangaroo2}`);

    kangaroo1 = kangaroo1 + v1;
    kangaroo2 = kangaroo2 + v2;
    if (kangaroo1 === kangaroo2) {
      result = "YES";
      break;
    }
    i++;
  }

  console.log(result);
}

kangaroo(0, 3, 5, 2);
