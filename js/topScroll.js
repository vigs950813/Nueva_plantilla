
    // Obtener el botón que lleva al inicio de la página
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Agregar un evento de clic al botón
    scrollToTopBtn.addEventListener('click', function (event) {
        event.preventDefault(); // Prevenir la acción predeterminada del enlace

        // Desplazar suavemente hacia arriba
        window.scrollTo({
            top: 0, // Desplazarse hasta el inicio de la página
            behavior: 'smooth' // Desplazamiento suave
        });
    });

