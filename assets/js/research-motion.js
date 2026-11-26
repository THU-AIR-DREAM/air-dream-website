(() => {
  const cards = document.querySelectorAll('#researches .isotope-item');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!cards.length || reducedMotion.matches || !('IntersectionObserver' in window)) return;

  // Keep cards visible without JavaScript; animate only their first entrance.
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      if (!reducedMotion.matches) entry.target.classList.add('research-enter');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  cards.forEach((card, index) => {
    card.style.setProperty('--research-delay', `${(index % 4) * 70}ms`);
    observer.observe(card);
    card.addEventListener('animationend', () => card.classList.remove('research-enter'), { once: true });
  });
})();
