const playBtn = document.getElementById('play-video-btn');
const lightbox = document.getElementById('video-lightbox');
const closeBtn = lightbox.querySelector('.close-video');
const video = lightbox.querySelector('video');

// Função para fechar o lightbox e resetar o vídeo
function closeVideo() {
    video.pause();
    video.currentTime = 0;
    lightbox.style.display = 'none';
}

// Abrir o vídeo
playBtn.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    video.play();
});

// Fechar ao clicar no botão "X"
closeBtn.addEventListener('click', closeVideo);

// Fechar ao clicar fora do vídeo
lightbox.addEventListener('click', (e) => {
    if (!video.contains(e.target)) {
        closeVideo();
    }
});

// Fechar ao pressionar ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.style.display === 'flex') {
        closeVideo();
    }
});

// Detectar swipe vertical (mobile)
let startY = 0;

lightbox.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
        startY = e.touches[0].clientY;
    }
});

lightbox.addEventListener('touchend', (e) => {
    const endY = e.changedTouches[0].clientY;
    const deltaY = endY - startY;

    if (Math.abs(deltaY) > 50) { // threshold para considerar swipe
        closeVideo();
    }
});
