document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contacto");
  const modal = document.getElementById("modal");
  const cerrar = document.getElementById("cerrar");

  form.addEventListener("submit", (e) => {
    e.preventDefault();       // Evita que la página se recargue
    modal.style.display = "flex"; // Muestra el modal
  });

  cerrar.addEventListener("click", () => {
    modal.style.display = "none"; // Cierra el modal al pulsar
    form.reset();                 // Opcional: limpia los campos del formulario
  });
});
