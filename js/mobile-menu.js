/**
 * Mobile fullscreen menu toggle
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var toggleBtn = document.querySelector('.e-n-menu-toggle');
    if (!toggleBtn) return;

    var wrapper = toggleBtn.nextElementSibling;
    if (!wrapper || !wrapper.classList.contains('e-n-menu-wrapper')) return;

    function openMenu() {
      toggleBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      toggleBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    toggleBtn.addEventListener('click', function () {
      var expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      if (expanded) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close menu when clicking a link
    wrapper.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        closeMenu();
      });
    });

    // Close menu when clicking the overlay background
    wrapper.addEventListener('click', function (e) {
      if (e.target === wrapper) {
        closeMenu();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggleBtn.getAttribute('aria-expanded') === 'true') {
        closeMenu();
      }
    });
  });
})();
