let currentIndex = 0;

function moveCarousel(direction) {
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;
  
  // Elimina la clase 'active' del elemento actual
  items[currentIndex].classList.remove('active');
  
  // Actualiza el índice actual
  currentIndex = (currentIndex + direction + totalItems) % totalItems;
  
  // Añade la clase 'active' al nuevo elemento
  items[currentIndex].classList.add('active');

  // Mueve el carrusel
  const carouselInner = document.querySelector('.carousel-inner');
  carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}
