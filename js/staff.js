document.addEventListener('DOMContentLoaded', function() {
    const teacherInfo = document.getElementById('teacher-info');
    const courseButtons = document.querySelectorAll('.course-btn');

    const teachersData = {
        prejardin1: {
            name: "Gómez Carrascal Diana Del Carmen",
            subjects: [
                "Acompañamiento De Los Padres Durante El Proceso De Aprendizaje: SIN DETERMINAR",
                "Desarrollo Comunicativo: SIN DETERMINAR",
                "Desarrollo Del Pensamiento: SIN DETERMINAR",
                "Desarrollo Social Y Emocional: SIN DETERMINAR"
            ]
        },
        jardin1: {
            name: "Sierra Marzan Margarita Rosa",
            subjects: [
                "Acompañamiento De Los Padres Durante El Proceso De Aprendizaje: Gómez López Cilia Bontti",
                "Desarrollo Comunicativo: Gómez López Cilia Bontti",
                "Desarrollo Del Pensamiento: Gómez López Cilia Bontti",
                "Desarrollo Social Y Emocional: Gómez López Cilia Bontti"
            ]
        },
        jardin2: {
            name: "Mendoza Vergara Susana Patricia",
            subjects: [
                "Acompañamiento De Los Padres Durante El Proceso De Aprendizaje: Mendoza Vergara Susana Patricia",
                "Desarrollo Comunicativo: Mendoza Vergara Susana Patricia",
                "Desarrollo Del Pensamiento: Mendoza Vergara Susana Patricia",
                "Desarrollo Social Y Emocional: Mendoza Vergara Susana Patricia"
            ]
        }
        // Agrega más datos para cada curso
    };

    courseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const course = this.getAttribute('data-course');
            const teacher = teachersData[course];

            if (teacher) {
                let html = `<h2>${teacher.name}</h2><ul>`;
                teacher.subjects.forEach(subject => {
                    html += `<li>${subject}</li>`;
                });
                html += '</ul>';
                teacherInfo.innerHTML = html;
            } else {
                teacherInfo.innerHTML = '<p>No hay información disponible para este curso.</p>';
            }
        });
    });
});