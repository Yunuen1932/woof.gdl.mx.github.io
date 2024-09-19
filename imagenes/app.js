
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';

    // Mostrar/ocultar stickers según la sección activa
    document.querySelectorAll('.sticker').forEach(sticker => {
        sticker.style.display = 'none';
    });

    switch(sectionId) {
        case 'Inicio':
            document.getElementById('sticker2').style.display = 'block';
            document.getElementById('sticker3').style.display = 'block';
            break;
        case 'Productos':
            document.getElementById('sticker4').style.display = 'block';
            document.getElementById('sticker7').style.display = 'block';
            break;
        case 'Contacto':
            document.getElementById('sticker5').style.display = 'block';
            document.getElementById('sticker6').style.display = 'block';
            break;
    }
}

// Inicializa la sección actual al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    showSection('Inicio'); // Mostrar la sección 'Inicio' por defecto
});
