// =========================
// COMO FUNCIONA - JS
// =========================
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".cf-card");

    cards.forEach((card) => {
        card.addEventListener("click", function () {
            const isOpen = card.classList.contains("open");

            // Fechar todos os cards antes, se quiser efeito acordeão
            cards.forEach(c => c.classList.remove("open"));

            // Se o card não estava aberto, abrir
            if (!isOpen) {
                card.classList.add("open");
            }
        });
    });
});
