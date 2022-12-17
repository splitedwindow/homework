const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      document.querySelectorAll(".nav-bar-item").forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href").replace('#', '') === entry.target.id
        );
      });
    }
  });
}, {
  threshold: 0.6,
});

document.querySelectorAll('section').forEach(
  (section) => observer.observe(section),
);