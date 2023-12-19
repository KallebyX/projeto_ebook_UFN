let currentPage = 0;
const content = document.getElementById('content');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const pages = [
    '<img src="pagina1.png" alt="Imagem 1">',
    '<img src="pagina2.png" alt="Imagem 2">',
    '<img src="pagina3.png" alt="Imagem 3">',
    '<video controls><source src="video.mp4" type="video/mp4"></video>'
];

function updateContent() {
    content.innerHTML = pages[currentPage];
}

prevBtn.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        updateContent();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
        currentPage++;
        updateContent();
    }
});

// Inicializa com a primeira página
updateContent();
