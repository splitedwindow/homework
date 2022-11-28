const fontFamilies = [
  "Arial",
  "Times New Roman",
  "Verdana",
  "Brush Script MT",
  "Tahoma",
  "Garamond",
];

function willMap() {
  const elements = document.getElementsByClassName("random-font");
  for (var i = 0; i < elements.length; i++) {
    let randNum = Math.floor(Math.random() * fontFamilies.length);

    elements[i].onclick((elem) => {
      elem.style.fontFamily = fontFamilies[randNum];
    });
  }
}
