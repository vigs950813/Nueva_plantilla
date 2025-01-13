function checkAnswers3() {
    let correctCount = 0;
    let incorrectCount = 0;

    // Función para verificar cada respuesta
    function checkAnswer(questionName, correctAnswer, feedbackId, explanation) {
        const feedbackSpan = document.getElementById(feedbackId);
        const questionInput = document.querySelector(`input[name=${questionName}]`);

        if (!questionInput) {
            console.error(`No se encontró la pregunta: ${questionName}`);
            return;
        }

        // Validar campos de texto
        if (['q8', 'q9', 'q10'].includes(questionName)) {
            const textAnswer = questionInput.value.trim();
            if (!textAnswer) {
                incorrectCount++;
                feedbackSpan.innerHTML = "<span style='color: blue;'>Por favor, completa esta respuesta.</span>";
            } else if (textAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
                correctCount++;
                feedbackSpan.innerHTML = "<span style='color: green;'>Respuesta correcta</span>";
            } else {
                incorrectCount++;
                feedbackSpan.innerHTML = `<span style='color: red;'>Respuesta incorrecta. ${explanation}</span>`;
            }
        } else {
            // Validar preguntas de opción múltiple
            const selectedAnswer = document.querySelector(`input[name=${questionName}]:checked`);
            if (!selectedAnswer) {
                incorrectCount++;
                feedbackSpan.innerHTML = "<span style='color: blue;'>Por favor, selecciona una respuesta.</span>";
            } else if (selectedAnswer.value === correctAnswer) {
                correctCount++;
                feedbackSpan.innerHTML = "<span style='color: green;'>Respuesta correcta</span>";
            } else {
                incorrectCount++;
                feedbackSpan.innerHTML = `<span style='color: red;'>Respuesta incorrecta. ${explanation}</span>`;
            }
        }
    }

    // Validar preguntas de opción múltiple
    const questions = [
        { name: 'q1', correct: 'b', feedbackId: 'feedback-q1', explanation: 'La asignación contigua, ligada e indexada son métodos principales. Respuesta correcta: b)' },
        { name: 'q2', correct: 'c', feedbackId: 'feedback-q2', explanation: 'La asignación contigua reserva bloques consecutivos. Respuesta correcta: c)' },
        { name: 'q3', correct: 'b', feedbackId: 'feedback-q3', explanation: 'En la asignación ligada, cada bloque apunta al siguiente. Respuesta correcta: b)' },
        { name: 'q4', correct: 'b', feedbackId: 'feedback-q4', explanation: 'La asignación indexada permite acceder mediante un índice. Respuesta correcta: b)' },
        { name: 'q5', correct: 'a', feedbackId: 'feedback-q5', explanation: 'La asignación contigua puede generar fragmentación externa. Respuesta correcta: a)' },
        { name: 'q6', correct: 'b', feedbackId: 'feedback-q6', explanation: 'La asignación indexada utiliza tablas de índice. Respuesta correcta: b)' },
        { name: 'q7', correct: 'c', feedbackId: 'feedback-q7', explanation: 'La asignación contigua puede provocar fragmentación interna y externa. Respuesta correcta: c)' }
    ];

    // Validar preguntas de texto
    const textQuestions = [
        { name: 'q8', correct: 'flexibilidad y reducción de fragmentación', feedbackId: 'feedback-q8', explanation: 'La asignación ligada mejora la flexibilidad y reduce la fragmentación.' },
        { name: 'q9', correct: 'fragmentación externa', feedbackId: 'feedback-q9', explanation: 'La asignación indexada resuelve la fragmentación externa.' },
        { name: 'q10', correct: 'almacenamiento en bloques contiguos', feedbackId: 'feedback-q10', explanation: 'La asignación contigua requiere bloques adyacentes.' }
    ];

    questions.forEach(q => checkAnswer(q.name, q.correct, q.feedbackId, q.explanation));
    textQuestions.forEach(q => checkAnswer(q.name, q.correct, q.feedbackId, q.explanation));

}
