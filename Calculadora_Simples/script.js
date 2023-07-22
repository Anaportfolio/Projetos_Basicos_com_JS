//Capturando as propiedades do elemento identificado
let n1 = document.querySelector("#n1");
let n2 = document.querySelector("#n2");
let resultado = document.querySelector("span");

// Função Somar
function somar() {
  resultado.innerHTML = parseInt(n1.value) + parseInt(n2.value);
}

// Função Multiplicar
function mutiplicar() {
  resultado.innerHTML = parseInt(n1.value) * parseInt(n2.value);
}

// Função Dividir
function dividir() {
  resultado.innerHTML = parseInt(n1.value) / parseInt(n2.value);
}

// Função Subtrair
function subtrair() {
  resultado.innerHTML = parseInt(n1.value) - parseInt(n2.value);
}
