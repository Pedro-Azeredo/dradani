/**
 * Mobile menu toggle - replacement for missing mega-menu bundle
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var toggleBtn = document.querySelector('.e-n-menu-toggle');
    if (!toggleBtn) return;

    var wrapper = toggleBtn.nextElementSibling;
    if (!wrapper || !wrapper.classList.contains('e-n-menu-wrapper')) return;

    toggleBtn.addEventListener('click', function () {
      var expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      toggleBtn.setAttribute('aria-expanded', String(!expanded));
    });

    // Close menu when clicking a link
    wrapper.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggleBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
      if (!toggleBtn.closest('.e-n-menu').contains(e.target)) {
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  });
})();
