document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const response_div = document.getElementById('response');
  
    form.addEventListener('submit', async (event) => {
      event.preventDefault(); // Previene el envío tradicional del formulario
  
      // Capturar los datos del formulario
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      try {
        // Enviar los datos al servidor
        const response = await fetch('https://pagina-web-delorah-back-n8j3.vercel.app/api/contact-form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, message }),
        });
  
        if (response.ok) {
          // Mostrar mensaje de éxito
          response_div.textContent = '¡Gracias por tu mensaje! Te contactaremos pronto.';
          response_div.style.color = 'black';
          form.reset(); // Opcional: Limpia el formulario
        } else {
          // Manejo de errores
          const error = await response.json();
          response_div.textContent = `Error: ${error.message || 'No se pudo enviar el mensaje.'}`;
          response_div.style.color = 'red';
        }
      } catch (error) {
        console.error(error);
        response_div.textContent = 'Ocurrió un error al enviar el mensaje.';
        response_div.style.color = 'red';
      }
    });
  });
  