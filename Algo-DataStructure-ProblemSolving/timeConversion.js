const timeConversion = (s) => {
  let hr = s[0] + s[1];
  let min = s[3] + s[4];
  let sec = s[6] + s[7];
  let turn = s[8] + s[9];

  if (turn === "PM" && hr !== "12") {
    hr = parseInt(hr) + 12;
  }
  if (turn == "AM" && hr === "12") {
    hr = "00";
  }
  let newFormat = hr + ":" + min + ":" + sec;
  console.log(newFormat);
};
timeConversion("07:05:45PM");
timeConversion("12:45:54PM");

timeConversion("12:05:39AM");
