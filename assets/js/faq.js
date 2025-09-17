// FAQ Accordion
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");

        // Fecha todos antes de abrir outro
        faqItems.forEach(i => {
            i.classList.remove("open");
            i.querySelector(".faq-question").setAttribute("aria-expanded", "false");
        });

        if (!isOpen) {
            item.classList.add("open");
            question.setAttribute("aria-expanded", "true");
        }
    });
});
