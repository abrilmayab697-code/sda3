function mostrarGracias() {
    // 1. Obtenemos el nombre y el lugar donde daremos las gracias
    const nombre = document.getElementById('nombreUsuario').value;
    const contenedor = document.getElementById('mensajeExito');

    // 2. Validamos que no esté vacío
    if (nombre.trim() === "") {
        contenedor.style.color = "red";
        contenedor.innerHTML = "Por favor, escribe tu nombre.";
    } else {
        // 3. Insertamos el mensaje personalizado en el HTML
        contenedor.style.color = "green";
        contenedor.innerHTML = "¡Gracias, " + nombre + "! Le responderemos lo antes posible.";
        
        // OPCIONAL: Limpiar el cuadro de texto después de enviar
        document.getElementById('nombreUsuario').value = "";
    }
}
