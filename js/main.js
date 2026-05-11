// Transparent nav over dark hero (home page only)
(function heroNav() {
  const hero = document.querySelector('.hero');
  const nav  = document.querySelector('.site-nav');
  if (!hero || !nav) return;

  const toggle = () => {
    const threshold = hero.offsetTop + hero.offsetHeight - nav.offsetHeight;
    if (window.scrollY < threshold) {
      nav.classList.add('nav-transparent');
    } else {
      nav.classList.remove('nav-transparent');
    }
  };

  toggle();
  window.addEventListener('scroll', toggle, { passive: true });
})();

// Mobile hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // Close menu when a nav link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}

// Mark active nav link based on current page
(function markActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();
