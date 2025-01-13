function resetearMarcas4() {
    // Elimina el contenido de los spans de retroalimentación
    const feedbackSpans = document.querySelectorAll('[id^="feedback-"]');
    feedbackSpans.forEach(span => {
        span.innerHTML = ""; // Borra el contenido del span
    });

    // Desmarca las opciones seleccionadas de las preguntas de opción múltiple
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radio => {
        radio.checked = false; // Desmarca los botones de opción
    });

}
