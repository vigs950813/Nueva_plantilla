function resetearMarcas() {
    // Restablecer las respuestas de las opciones múltiples
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach((radio) => {
        radio.checked = false; // Desmarcar las opciones seleccionadas
    });

    // Restablecer las respuestas de los campos de texto
    const textInputs = document.querySelectorAll('input[type="text"]');
    textInputs.forEach((input) => {
        input.value = ''; 
    });

    // Restablecer los feedbacks
    const feedbackSpans = document.querySelectorAll('span[id^="feedback-"]');
    feedbackSpans.forEach((span) => {
        span.innerHTML = ''; // Limpiar retroalimentación
    });
}
