const fundo = document.querySelector("body");
const cor = document.querySelector("input");

// Definindo a cor constante de fundo antes da cor ser selecionada
const colorpadrao = "#fff";
fundo.style.backgroundColor = `${colorpadrao}`;

// Definindo a cor que foi escolida
function onChangeBg() {
  fundo.style.backgroundColor = `${cor.value}`;
}
