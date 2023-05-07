const fundo = document.querySelector("body");
const cor = document.querySelector("input");

const colorpadrao = "#fff";
fundo.style.backgroundColor = `${colorpadrao}`;

function onChangeBg() {
  fundo.style.backgroundColor = `${cor.value}`;
}
