// Variable global para controlar el índice de la diapositiva actual
let slideIndex = 0;

// Función para mostrar las diapositivas automáticamente
function showSlides() {
  // Obtener todas las imágenes dentro del contenedor del carrusel
  const slides = document.querySelectorAll('.carousel-content img');
  
  // Remover la clase 'active' de todas las imágenes
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }

  // Incrementar el índice de la diapositiva
  slideIndex++;
  
  // Reiniciar el índice si es mayor que la cantidad de imágenes
  if (slideIndex > slides.length) { slideIndex = 1; }
  
  // Agregar la clase 'active' a la imagen actual según el índice
  slides[slideIndex - 1].classList.add('active');

  // Llamar a la función showSlides() de nuevo después de 2 segundos
  setTimeout(showSlides, 2000); 
}

// Llamar a la función showSlides() para iniciar el carrusel automáticamente al cargar la página
showSlides();
