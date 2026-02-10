document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("contacto");
  const notificacion = document.getElementById("notificacion");

  if (!formulario) {
    console.error("❌ No existe un form con id='contacto'");
    return;
  }

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    notificacion.style.display = "block";
  });
});
