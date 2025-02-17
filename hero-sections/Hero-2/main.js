const hamburger = document.querySelector(".nav__hamburger");
const timesCircle = document.querySelector(".nav__hamburger--close");
const menu = document.querySelector(".mobile__nav");

hamburger.addEventListener("click", () => {
  menu.style.display = "block";
});

timesCircle.addEventListener("click", () => {
  menu.style.display = "none";
});
