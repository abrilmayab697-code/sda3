document.getElementById("contacto").addEventListener("submit", function(event) {
  event.preventDefault();

  const notificacion = document.getElementById("notificacion");
  notificacion.textContent = "✅Nos pondremos en contacto con usted";
  notificacion.style.display = "block";

  setTimeout(() => {
    notificacion.style.display = "none";
  }, 3000);
});
