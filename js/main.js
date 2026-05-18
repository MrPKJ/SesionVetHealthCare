/* ============================================
   SEASON HEALTH CARE — Shared JS
   ============================================ */

// ---- Navbar hamburger ----
const hamburger = document.querySelector('.nav-hamburger');
const navLinks  = document.querySelector('.nav-links');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// ---- Active nav link ----
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    a.classList.add('active');
  }
});

// ---- Search overlay ----
const searchBtn     = document.querySelector('.nav-search-btn');
const searchOverlay = document.querySelector('.search-overlay');
const searchClose   = document.querySelector('.search-close');
if (searchBtn && searchOverlay) {
  searchBtn.addEventListener('click', () => searchOverlay.classList.add('active'));
  searchClose?.addEventListener('click', () => searchOverlay.classList.remove('active'));
  searchOverlay.addEventListener('click', e => {
    if (e.target === searchOverlay) searchOverlay.classList.remove('active');
  });
}

// ---- Scroll to top ----
const scrollTopBtn = document.querySelector('.scroll-top');
window.addEventListener('scroll', () => {
  if (scrollTopBtn) {
    scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
  }
});
scrollTopBtn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ---- Scroll animations ----
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
