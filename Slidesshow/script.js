//Capturando as propiedades do elemento identificado
var slide = document.querySelector(".slide");

// Criando um Arry com as imagens
var imgs = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg", "img/img4.jpg"];

// Atribuindo o tempo que o slide vai demorar para passar as imagens
var tempo = 2000; // 2000 milisegundos = 2 segundos

// Atribuindo o valor do contado
var contador = 0;

// Criando a função para fazer a troca das imagens
function moveSlide() {
  slide.src = imgs[contador];

  if (contador < imgs.length - 1) {
    contador++;
  } else {
    contador = 0;
  }
  //Usamos a função setTimeout() para executar um determinado trecho de código a cada período de tempo
  setTimeout("moveSlide()", tempo);
}
// Usamos a função para executar o Slide quando a página for carregada pela primeiara vez
window.onload = moveSlide;
