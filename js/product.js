async function obtenerProductos() {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category'); // Ejemplo: 'blusas'
    console.log(`Categoría seleccionada: ${category}`);
    try {
      const response = await fetch(`https://pagina-web-delorah-back-n8j3.vercel.app/api/products?category=${category}`);
      const productos = await response.json();
  
      const contenedor = document.getElementById('gallery-section');
      contenedor.innerHTML = ''; // Limpiar productos existentes
  
      productos.forEach((product) => {
        const productDiv = document.createElement('div');
        productDiv.className="product-item";
        productDiv.innerHTML = `
          <h3>${product.name}</h3>
          <img src="${product.urlimage}" alt="${product.name}" width="200">
        `;
        contenedor.appendChild(productDiv);
      });
    } catch (error) {
      console.error('Error al obtener productos:', error);
    }
  }
  
  // Llamar a la función con una categoría de ejemplo
  obtenerProductos();