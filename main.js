/* Menu mobile */
const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menu_btn");
const body = document.getElementsByTagName("body")[0];

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("hidden");
});
