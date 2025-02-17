const menu = document.querySelector(".nav__list");
const burgerNav = document.querySelector("#toggle-nav");

burgerNav.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
