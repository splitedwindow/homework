function generateListOfNumberWithStep(num1, num2, step) {
  if (step <= 0) {
    const span = document.createElement("span");
    span.innerText = "Interval must be positive number";
    document.appendChild(span);
    return 'shit';
  }

  if (num1 < num2) {
    var ul = document.createElement("ul");
    document.body.appendChild(ul);

    count = num2 - num1;
    for (let index = 0; index < count; index++) {
      const li = document.createElement("li");
      li.value = toString(index);
      ul.appendChild(li);
      index += step;
    }
  } else {
    const p = document.createElement("p");
    p.innerText = "Wrong interval";
    document.body.appendChild(p);
  }
}
