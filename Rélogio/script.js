const getHours = () => {
  // Capturando o conteúdo
  const clock = document.getElementsByClassName("relogio")[0];

  // Usando o método Date()
  const date = new Date();

  // Pegando a hora, minutos e segundos
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  // Atribuindo as variáveis para receber os valores horas, minutos e segundos
  const hour = hours < 10 ? `0${hours}` : hours;
  const minute = minutes < 10 ? `0${minutes}` : minutes;
  const second = seconds < 10 ? `0${seconds}` : seconds;

  // Exibindo no arquivo HTML
  clock.innerHTML = `${hour}:${minute}:${second}`;
};

// Definindo o intervalo de tempo
setInterval(() => {
  getHours();
}, 1000);
