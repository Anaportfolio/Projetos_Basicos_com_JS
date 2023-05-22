//Capturando as propiedades do elemento identificado
const valor = document.querySelector("#contador");

// Função para Incrementar
function Incrementando() {
  valor.innerHTML = `${parseInt(valor.innerText) + 1}`; // A função analisa um argumento string e retorna um inteiro na base especificação
}

// Função para Decrementar
function Decremento() {
  valor.innerHTML = `${parseInt(valor.innerText) - 1}`;
}
