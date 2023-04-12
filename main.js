/* Menu mobile */
const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menu_btn");
const body = document.getElementsByTagName("body")[0];

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("hidden");
});

/* Header bgs */
const arrow = `<i class="fa-solid fa-arrow-right-long"></i>`;
const backgrounds = [
  {
    class: "bg_a",
    text: "Un programa divertido de fitness.<br>En tu barrio.<br>Enfocados 100% a tí.",
    btn: `Conoce a nuestro equipo ${arrow}`,
  },
  {
    class: "bg_b",
    text: "Atención más personalizada.<br>Mejor experiencia profesional.",
    btn: `Nuestra historia ${arrow}`,
  },
  {
    class: "bg_c",
    text: "Creemos en tu potencial.<br>El tuyo.<br>El nuestro.",
    btn: `Ver comentarios ${arrow}`,
  },
];

const header = document.getElementById("top");
const bgText = document.getElementById("bg_text");
const bgBtn = document.getElementById("bg_btn");

let count = 1;
setInterval(() => {
  //background img
  if (count === 0) header.classList.remove(backgrounds[2].class);
  if (count === 1) header.classList.remove(backgrounds[count - 1].class);
  if (count === 2) header.classList.remove(backgrounds[count - 1].class);

  header.classList.add(backgrounds[count].class);

  //background text
  bgText.innerHTML = backgrounds[count].text;

  //background button
  bgBtn.innerHTML = backgrounds[count].btn;

  //Count
  count++;
  count > 2 ? (count = 0) : "";
}, 5000);
