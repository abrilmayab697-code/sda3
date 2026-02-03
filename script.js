// Esperamos a que el HTML esté cargado
document.addEventListener("DOMContentLoaded", () => {

  const eventos = [
    "1950 – Alan Turing propone el Test de Turing",
    "1957 – Perceptrón de Rosenblatt",
    "1997 – Deep Blue vence a Kasparov",
    "2012 – Revolución del Deep Learning (ImageNet)",
    "2020+ – IA generativa y modelos grandes"
  ];

  let indice = 0;
  const timeline = document.getElementById("timeline");

  // Seguridad: si no encuentra el div, muestra error
  if (!timeline) {
    console.error("No existe el elemento con id 'timeline'");
    return;
  }

  // Función para cambiar el evento
  function cambiarEvento() {
    timeline.textContent = eventos[indice];
    indice = (indice + 1) % eventos.length;
  }

  // Mostramos el primer evento y luego cambiamos cada 2,5s
  cambiarEvento();
  setInterval(cambiarEvento, 2500);

});


