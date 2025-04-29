document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // להסיר class "active" מכולם
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });

      // להוסיף class "active" רק ללינק שלחצו עליו
      this.classList.add("active");
    });
  });
});
