const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav]');

const updateHeader = () => {
  if (!header) return;
  header.classList.toggle('scrolled', window.scrollY > 40);
};

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.classList.toggle('open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.13 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const servicePointObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('points-visible');
      servicePointObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.32 });

document.querySelectorAll('[data-service-card]').forEach((card) => servicePointObserver.observe(card));

const watchSection = document.querySelector('[data-watch-section]');
const watchLabel = document.querySelector('[data-watch-label]');

const updateWatch = () => {
  if (!watchSection) return;
  const rect = watchSection.getBoundingClientRect();
  const travel = watchSection.offsetHeight - window.innerHeight;
  const progress = Math.max(0, Math.min(1, -rect.top / Math.max(1, travel)));
  watchSection.style.setProperty('--night', progress.toFixed(3));
  if (watchLabel) {
    watchLabel.textContent = progress < 0.35
      ? 'Day watch active'
      : progress < 0.72
        ? 'Evening watch active'
        : 'Night watch active';
  }
};

updateWatch();
window.addEventListener('scroll', updateWatch, { passive: true });
window.addEventListener('resize', updateWatch);

document.querySelectorAll('[data-year]').forEach((node) => {
  node.textContent = new Date().getFullYear();
});
