// navbar changing colors

const navbar = document.getElementById("mainNavbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

// // navbar button changing colors

// const navbarBtn = document.getElementById("navbarBtn");

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 400) {
//     navbarBtn.classList.add("btn-navbar-scrolled");
//   } else {
//     navbarBtn.classList.remove("btn-navbar-scrolled");
//   }
// });

window.addEventListener("scroll", function () {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(function (reveal) {
    const windowHeight = window.innerHeight;
    const elementTop = reveal.getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveal.classList.add("active");
    } else {
      reveal.classList.remove("active");
    }
  });
});
