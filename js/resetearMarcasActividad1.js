function resetearMarcas1() {
    // Seleccionar todas las filas de preguntas
    for (let i = 1; i <= 6; i++) {
        const preguntaRow = document.getElementById('pregunta' + i);
        const checkboxes = preguntaRow.querySelectorAll('input[type="checkbox"]');

        // Desmarcar las casillas
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });

        // Restablecer el fondo de las filas
        preguntaRow.style.backgroundColor = '';

        // Eliminar los mensajes de retroalimentación
        const mensajeAnterior = preguntaRow.querySelector('.mensaje-repaso');
        if (mensajeAnterior) {
            mensajeAnterior.remove();
        }
    }
}
