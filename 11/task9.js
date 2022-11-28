const card = {
  title: "Title 1",
  imageUrl: "Some url",
  description: "Eu ut non sint ullamco minim anim laboris sit nulla.",
};

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
  image.setAttribute("src", card.imageUrl);
  image.setAttribute("alt", "alternative text was not provided");
  divCard.appendChild(image);

  const p = document.createElement("p");
  p.innerText = card.description;
  divCard.appendChild(p);
}
