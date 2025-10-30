// Mobile Menu Toggle
const menu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const boxes = document.querySelectorAll('.elm');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show'); // optional (remove to keep visible)
      }
    });
  }, { threshold: 0.3 }); // 0.3 means 30% visible

  boxes.forEach(box => observer.observe(box));