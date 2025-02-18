// Función para animar el conteo
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const increment = Math.ceil(target / 100); // Define un incremento suave
        const updateCount = () => {
            if (count < target) {
                count += increment;
                counter.innerText = count;
                setTimeout(updateCount, 20); // Velocidad del conteo
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
}

// Función para detectar si la sección es visible en pantalla
function checkVisibility() {
    const statsSection = document.querySelector('.student-stats');
    const rect = statsSection.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
    if (isVisible) {
        statsSection.classList.add('visible');
        animateCounters();
        window.removeEventListener('scroll', checkVisibility); // Evita repetir la animación
    }
}

// Ejecutar en la carga y en el scroll
window.addEventListener('load', checkVisibility);
window.addEventListener('scroll', checkVisibility);