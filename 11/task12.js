const letters = ["A", "B", "C", "D", "E", "F"];

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomColor(type) {
  if (type === "hex") {
    let hexString = "#";

    for (let i = 0; i < 6; i++) {
      let numOrNot = randomIntFromInterval(1, 2);

      if (numOrNot == 1) {
        // 1 - number
        let add = randomIntFromInterval(0, 9);

        hexString = hexString + toString(add);
      } else {
        let letter = Math.floor(Math.random() * letters.length);
        hexString = hexString + letter;
      }
    }
    return hexString;
  } else if (type === "rgb") {
    let arrOfRgb = [];

    for (let i = 0; i < 3; i++) {
      let newNum = randomIntFromInterval(0, 255);
      arrOfRgb[i] = newNum;
    }

    let resultStr;
    resultStr =
      "rgb(" +
      toString(arrOfRgb[0]) +
      ", " +
      toString(arrOfRgb[1]) +
      ", " +
      toString(arrOfRgb[2]) +
      ")";

    return resultStr;
  } else {
    return -1;
  }
}
