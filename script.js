let currentPage = 0;
const content = document.getElementById('content');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const pages = [
    '<img src="pagina1.png" alt="Imagem 1">',
    '<img src="pagina2.png" alt="Imagem 2">',
    '<img src="pagina3.png" usemap="#image-map" alt="Imagem 3"><map name="image-map"><area target="" alt="" title="" href="#" coords="430,575,232,482" shape="rect" onclick="abrirVideo()"></map>',
    '<video id="video" controls style="display:none;"><source src="video.mp4" type="video/mp4"></video>',
    '<video controls><source src="video2.mp4" type="video/mp4"></video>'
];

function updateContent() {
    content.innerHTML = pages[currentPage];
    if (currentPage === 3) {
        document.getElementById('video').style.display = 'block';
    }
}

function abrirVideo() {
    currentPage = 3;
    updateContent();
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
