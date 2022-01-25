function stringFormat(str) {
  let input;
  if (typeof str == "number") {
    input = str.toString();
  } else {
    input = str;
  }

  let ss = input.replace(/[\-s]/g, "");
  let st = ss.replace(/\s/g, "");

  let newArr = [];
  for (let i = 0; i < st.length; i++) {
    if (i < 4) {
      push;
    }
    st[i];
  }
  return st;
  let splitedString = st.match(/.{1,4}/g);

  return splitedString.join(" ");
}

console.log(stringFormat("Hello Wolrd 123 -- pedro"));

console.log(stringFormat(0044428555218361));
