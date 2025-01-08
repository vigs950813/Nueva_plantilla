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

  const header = document.getElementById('header')

  // Cargar header y footer dinámicamente
  loadContent('header', 'dynamic/header.html');
  //loadContent('footer', './dynamic/footer.html');