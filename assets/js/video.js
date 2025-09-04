const thumbnail = document.querySelector('.video-thumbnail');
const overlay = document.querySelector('.video-overlay');
const closeBtn = document.querySelector('.close-video');
const video = overlay.querySelector('video');

// Abrir overlay
thumbnail.addEventListener('click', () => {
    overlay.style.display = 'flex';
    video.currentTime = 0;
    video.play();
});

// Fechar overlay
closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    video.pause();
});
