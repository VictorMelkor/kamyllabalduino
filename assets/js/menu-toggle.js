// Seleciona botão e menu
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('show'); // adiciona ou remove a classe show
    menuToggle.setAttribute('aria-expanded', isOpen); // acessibilidade
});

// Fechar menu ao clicar em um link (opcional)
const menuLinks = document.querySelectorAll('.menu li a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (menu.classList.contains('show')) {
            menu.classList.remove('show');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
});