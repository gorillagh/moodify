const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  if (this.scrollY > 40) {
    navbar.classList.add("raised");
  } else {
    navbar.classList.remove("raised");
  }
});
