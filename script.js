const eventos = [
  "1950 – Test de Turing",
  "1957 – Perceptrón",
  "1997 – Deep Blue",
  "2012 – Deep Learning",
  "2020+ – IA generativa"
];

let indice = 0;
const timeline = document.getElementById("timeline");

function cambiarEvento() {
  timeline.textContent = eventos[indice];
  indice = (indice + 1) % eventos.length;
}

cambiarEvento();
setInterval(cambiarEvento, 2500);
