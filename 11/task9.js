function generateCard(card) {
  const divCard = document.createElement("div");
  divCard.setAttribute("class", "card");
  document.appendChild(divCard);

  const h4 = document.createElement("h4");
  h4.innerText = card.title;
  divCard.appendChild(h4);

  const br = document.createElement("br");
  divCard.appendChild(br);

  const image = document.createElement("img");
  image.setAttribute("src", "Some url");
  image.setAttribute("alt", "alternative text was not provided");
  divCard.appendChild(image);

  const p = document.createElement("p");
  p.innerText = "Eu ut non sint ullamco minim anim laboris sit nulla.";
  divCard.appendChild(p);
}
