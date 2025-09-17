const animateSections = document.querySelectorAll('.animate-section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // elemento entra na tela
        } else {
            entry.target.classList.remove('show'); // elemento sai da tela
        }
    });
}, { threshold: 0.2 }); // 20% do elemento visível

animateSections.forEach(section => observer.observe(section));
