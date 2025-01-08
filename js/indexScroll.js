document.addEventListener("DOMContentLoaded", () => {
    const navbarLinks = document.querySelectorAll(".dropdown-menu .dropdown-item");

    navbarLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();

            // Obtener el atributo href y quitar el '#' para obtener el ID
            const targetId = link.getAttribute("href").slice(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Scroll suave hacia la sección
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            } else {
                console.error(`No se encontró la sección con ID: ${targetId}`);
            }
        });
    });
});
