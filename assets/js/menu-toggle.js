// Seleciona botão e menu
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('show');
    menuToggle.setAttribute('aria-expanded', isOpen);
});

// Fechar menu ao clicar em um link
const menuLinks = document.querySelectorAll('.menu li a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (menu.classList.contains('show')) {
            menu.classList.remove('show');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
});

// Fechar menu ao clicar fora dele
document.addEventListener('click', (event) => {
    const isClickInsideMenu = menu.contains(event.target);
    const isClickOnToggle = menuToggle.contains(event.target);

    if (!isClickInsideMenu && !isClickOnToggle && menu.classList.contains('show')) {
        menu.classList.remove('show');
        menuToggle.setAttribute('aria-expanded', 'false');
    }
});

// --- Swipe para abrir/fechar (mobile) ---
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (event) => {
    touchStartX = event.changedTouches[0].screenX;
}, { passive: true });

document.addEventListener('touchend', (event) => {
    touchEndX = event.changedTouches[0].screenX;
    handleGesture();
}, { passive: true });

function handleGesture() {
    const swipeDistance = touchEndX - touchStartX;
    const minSwipe = 50; // distância mínima em px para considerar swipe

    if (Math.abs(swipeDistance) > minSwipe) {
        if (swipeDistance > 0) {
            // direita -> abre
            if (!menu.classList.contains('show')) {
                menu.classList.add('show');
                menuToggle.setAttribute('aria-expanded', 'true');
            }
        } else {
            // esquerda -> fecha
            if (menu.classList.contains('show')) {
                menu.classList.remove('show');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        }
    }
}
