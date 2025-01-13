function resetearMarcas() {
    // Reinicia todas las marcas (radios y checkboxes)
    const inputs = document.querySelectorAll('input[type="radio"], input[type="checkbox"]');
    inputs.forEach(input => {
        input.checked = false; // Desmarca todas las opciones
    });

    // Limpia el contenido de los elementos de retroalimentación
    const feedbackElements = document.querySelectorAll('[id^="feedback-"]');
    feedbackElements.forEach(feedback => {
        feedback.innerHTML = ''; // Vacía el contenido del feedback
    });

    // Opcional: Puedes agregar algún mensaje o visualización indicando que todo se ha reiniciado
    console.log('Todas las respuestas han sido reiniciadas.');
}
