import './task12';

function willMap() {
  const elements = document.getElementsByClassName("random-font");
  for (var i = 0; i < elements.length; i++) {
    let randNum = Math.floor(Math.random() * fontFamilies.length);

    elements[i].onclick((elem) => {
      elem.style.color = getRandomColor('rgb');
    });
  }
}