const header = document.querySelector(".header");
const sectionOne = document.querySelector(".photo-header-section");

const sectionOneOptions = {
  rootMargin: "-600px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("scrolled-header");
    } else {
      
      header.classList.remove("scrolled-header");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);
