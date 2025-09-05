// assets/js/scroll-spy.js
document.addEventListener('DOMContentLoaded', () => {
  const menuLinks = Array.from(document.querySelectorAll('.menu a'));
  const sections = Array.from(document.querySelectorAll('section[id]'));

  // mapa href -> linkElement (ex: "#contato" => <a href="#contato">)
  const linkByHash = new Map();
  menuLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) linkByHash.set(href, link);
  });

  // mapa sectionId -> linkElement (p/ lookup rápido)
  const sectionToLink = new Map();

  sections.forEach(section => {
    const hash = `#${section.id}`;
    if (linkByHash.has(hash)) {
      sectionToLink.set(section.id, linkByHash.get(hash));
      return;
    }

    // fallback comum: se a seção é "hero" e existe link "#home", use-o
    if ((section.id === 'hero' || section.id.toLowerCase().includes('inicio')) && linkByHash.has('#home')) {
      sectionToLink.set(section.id, linkByHash.get('#home'));
      return;
    }

    // tentativa de casar por título (h1/h2/h3) com o texto do link
    const heading = section.querySelector('h1, h2, h3');
    if (heading) {
      const headingText = heading.textContent.trim().toLowerCase();
      for (const [href, linkEl] of linkByHash.entries()) {
        const linkText = linkEl.textContent.trim().toLowerCase();
        if (
          linkText === headingText ||
          linkText.includes(headingText) ||
          headingText.includes(linkText)
        ) {
          sectionToLink.set(section.id, linkEl);
          break;
        }
      }
    }
  });

  // util: limpa todos os actives
  function clearActive() {
    menuLinks.forEach(l => l.classList.remove('active'));
  }

  // Observer: quando uma seção fica visível, ativa o link mapeado
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        clearActive();
        const link = sectionToLink.get(entry.target.id);
        if (link) link.classList.add('active');
      }
    });
  }, { threshold: 0.6 }); // 60% da seção visível

  sections.forEach(s => observer.observe(s));

  // ativa item inicial com base no centro da viewport (para quando abrir a página já rolada)
  function activateOnLoad() {
    const viewportMid = window.scrollY + window.innerHeight / 2;
    let current = null;
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      const bottom = rect.bottom + window.scrollY;
      if (viewportMid >= top && viewportMid <= bottom) current = section;
    });
    if (!current) current = sections[0];
    clearActive();
    const link = sectionToLink.get(current.id);
    if (link) link.classList.add('active');
  }

  activateOnLoad();
  window.addEventListener('resize', activateOnLoad);

  // se o usuário usar hashes manualmente (click em link), atualiza o active imediatamente
  window.addEventListener('hashchange', () => {
    const hash = location.hash;
    if (linkByHash.has(hash)) {
      clearActive();
      linkByHash.get(hash).classList.add('active');
    }
  });
});
