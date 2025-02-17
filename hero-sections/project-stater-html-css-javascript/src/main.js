// import "./style.css";

const menu = document.querySelector("#nav-list");
const burgerNav = document.querySelector("#toggle-nav");

burgerNav.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    if (!menu.classList.contains("hidden")) {
        menu.classList.add("left-0");
    } else {
        menu.classList.remove("left-0");
    }
});

console.log(menu, burgerNav);
