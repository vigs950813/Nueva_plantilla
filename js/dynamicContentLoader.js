let activeLink = null; // Variable para almacenar el enlace activo

function loadContent(page, linkElement) {
  // Cambiar el fondo del enlace activo, si existe
  if (activeLink) {
    activeLink.classList.remove('active'); // Eliminar la clase 'active' del enlace anterior
  }

  // Asignar el enlace clickeado como el nuevo activo
  linkElement.classList.add('active');
  activeLink = linkElement; // Guardar el enlace activo

  // Cargar el contenido de la página seleccionada
  fetch(page)
    .then(response => {
      if (response.ok) {
        return response.text();
      } else {
        throw new Error('Error en la respuesta del servidor');
      }
    })
    .then(html => {
      document.getElementById('contenido-cargado').innerHTML = html;
    })
    .catch(error => {
      console.error('Error al cargar la página:', error);
      document.getElementById('contenido-cargado').innerHTML = `<p>Hubo un error al cargar el contenido. Intenta nuevamente.</p>`;
    });
}

// Agregar evento de clic a todos los enlaces dentro del temario
document.querySelectorAll('#temario .list-group-item a').forEach(link => {
  link.addEventListener('click', function (event) {
    // Prevenir el comportamiento predeterminado del enlace
    event.preventDefault();

    // Llamar a la función loadContent con la página asociada y el elemento del enlace
    const page = this.getAttribute('onclick').match(/'(.*?)'/)[1]; // Extraer la página del atributo onclick
    loadContent(page, this);
  });
});
