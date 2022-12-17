let section = document.querySelector("#onscroll-number-rise");
let stat = document.querySelectorAll(" .blue-content-wrapper .blue-number");
let start = false;

window.onscroll = function() {
  if(window.scrollY >= section.offsetTop) {
    if(!start) {
      stat.forEach((sta) => startCount(sta));
    }
    start = true;
  }
}

function startCount(el) {
  let max = el.dataset.max;
  let count = setInterval(() => {
    el.textContent++;
    if(el.textContent == max) {
      clearInterval(count);
    }
  }, 2000 / stat)
}