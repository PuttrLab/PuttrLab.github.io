// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.header__nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      nav.classList.toggle('open');
    });

    // Close nav when clicking a link
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
      });
    });
  }

  // FAQ accordion
  document.querySelectorAll('.faq__question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq__item').forEach(i => i.classList.remove('open'));

      // Toggle current
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
});
