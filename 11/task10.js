const cards = [
  { title: "title A", imageUrl: "url", description: "description - 1" },
  { title: "title B", imageUrl: "url", description: "description - 2" },
  { title: "title C", imageUrl: "url", description: "description - 3" },
  { title: "title D", imageUrl: "url", description: "description - 4" },
];

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

function generateCards(cards) {
  for (let i = 0; i < cards.length; i++) {
    if (i % 2 == 0) {
      let template = cards[i];
      let tempString = "[" + toString(i) + "]" + " " + cards[i].title;
      template.title = tempString;
      generateCard(template);
    } else {
      generateCard(cards[i]);
    }
  }
}
