// Sticky nav: solid background once the page scrolls.
const nav = document.querySelector('.nav');

const onScroll = () => {
  nav.classList.toggle('is-scrolled', window.scrollY > 12);
};

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Reveal sections and cards as they enter the viewport.
const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.12, rootMargin: '0px 0px -40px' });

  revealItems.forEach((el) => observer.observe(el));
} else {
  revealItems.forEach((el) => el.classList.add('in'));
}

// Pointer-following glow inside app cards.
const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('pointermove', (event) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    card.style.setProperty('--my', `${event.clientY - rect.top}px`);
  });
});
