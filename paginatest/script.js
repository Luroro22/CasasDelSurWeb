let currentIndex = 0;
let currentImages = [];
let currentTitle = "";

// Función para abrir el lightbox
function openLightbox(element) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxTitle = document.getElementById('lightbox-title');
    
    // Obtener las imágenes y el título
    const images = JSON.parse(element.getAttribute('data-images'));
    const title = element.getAttribute('data-title');
    
    // Establecer las imágenes correspondientes a la galería
    currentImages = images;
    currentTitle = title;

    // Establecer el índice de la imagen que se clickeó (por ahora la primera)
    currentIndex = 0;

    // Establecer la imagen y el título del lightbox
    lightboxImage.src = currentImages[currentIndex];
    lightboxTitle.textContent = currentTitle;

    // Activar el lightbox
    lightbox.classList.add('active');
    updateIndicators(); // Actualizar los indicadores
}

// Función para cerrar el lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
}

// Función para navegar entre las imágenes
function navigate(direction) {
    currentIndex = (currentIndex + direction + currentImages.length) % currentImages.length;
    const lightboxImage = document.getElementById('lightbox-image');
    lightboxImage.src = currentImages[currentIndex];
    updateIndicators();
}

// Función para actualizar los indicadores del lightbox
function updateIndicators() {
    const indicatorsContainer = document.getElementById('indicators');
    indicatorsContainer.innerHTML = ''; // Limpiar los indicadores existentes

    currentImages.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if (index === currentIndex) {
            indicator.classList.add('active');
        }
        indicatorsContainer.appendChild(indicator);
    });
}
