//Capturando as propiedades do elemento identificado
const modal = document.querySelector(".container");

// Função para mostrar o Modal
function Abrir() {
  modal.classList.add("active");
}

// Função para fechar o Modal
function Fechar() {
  modal.classList.remove("active");
}
