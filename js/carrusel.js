let currentIndex = 0;
const images = document.querySelectorAll('.carrusel-images img');
const totalImages = images.length;

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
}

function moveSlide(direction) {
    currentIndex += direction;
    if (currentIndex >= totalImages) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    }
    showImage(currentIndex);
}

function autoSlide() {
    setInterval(() => {
        moveSlide(1);
    }, 3000); // Cambia la imagen cada 3 segundos
}

// Iniciar el carrusel automático
autoSlide();

// Mostrar la primera imagen al cargar la página
showImage(currentIndex);