 // Función para cargar contenido dinámico
 async function loadContent(id, filePath) {
    try {
      const response = await fetch(filePath);
      if (!response.ok) {
        throw new Error(`Error al cargar ${filePath}: ${response.statusText}`);
      }
      const content = await response.text();
      document.getElementById(id).innerHTML = content;
    } catch (error) {
      console.error(error);
    }
  }

  const navbar = document.getElementById('navbar')

  // Cargar header y foote rdinámicamente
  loadContent('navbar', '/dynamic/navbar.html');
  //loadContent('footer', './dynamic/footer.html');

  