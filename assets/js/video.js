// Seleciona elementos
const videoThumbnail = document.querySelector('.hero-photo');
const videoOverlay = document.querySelector('.video-overlay');
const closeVideoBtn = document.querySelector('.close-video');
const video = videoOverlay.querySelector('video');

// Função para abrir overlay
videoThumbnail.addEventListener('click', () => {
    videoOverlay.style.display = 'flex';
    video.play();
});

// Função para fechar overlay
function closeVideo() {
    video.pause();
    video.currentTime = 0; // opcional, reinicia o vídeo
    videoOverlay.style.display = 'none';
}

// Botão fechar
closeVideoBtn.addEventListener('click', closeVideo);

// Clique fora do vídeo fecha overlay
videoOverlay.addEventListener('click', (e) => {
    if (e.target === videoOverlay) {
        closeVideo();
    }
});
