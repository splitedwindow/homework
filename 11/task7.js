function generateListOfNumber(num1, num2) {
  if (num1 < num2) {
    var ul = document.createElement("ul");
    document.body.appendChild(ul);

    count = num2 - num1;
    for (let index = 0; index < count; index++) {
      const li = document.createElement("li");
      li.value = toString(index);
      ul.appendChild(li);
    }
  } else {
    const p = document.createElement("p");
    p.innerText = "Wrong interval";
    document.body.appendChild(p);
  }
}
