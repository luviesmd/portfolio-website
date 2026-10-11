/* ==========================================================
   Shared by both pages: email links, theme toggle, nav, reveal
   ========================================================== */
(function () {
  'use strict';

  var root = document.documentElement;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };

  /* ---------- Email links ---------- */
  var emailLink = $('#emailLink');
  if (emailLink) { emailLink.href = 'mailto:' + CONFIG.email; emailLink.textContent = CONFIG.email; }
  var emailBtn = $('#emailBtn');
  if (emailBtn) emailBtn.href = 'mailto:' + CONFIG.email + '?subject=' + encodeURIComponent('Project inquiry');
  $$('[data-email-link]').forEach(function (a) {
    a.href = 'mailto:' + CONFIG.email + '?subject=' + encodeURIComponent(a.getAttribute('data-subject') || 'Project inquiry');
  });
  var yr = $('#year');
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---------- Theme toggle ---------- */
  var toggle = $('#themeToggle');
  function syncToggle() {
    toggle.setAttribute('aria-label', root.getAttribute('data-theme') === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  }
  if (toggle) {
    syncToggle();
    toggle.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('luz-theme', next); } catch (e) {}
      syncToggle();
    });
  }

  /* ---------- Nav: scrolled state + mobile menu ---------- */
  var nav = $('#nav');
  function onScroll() { nav.classList.toggle('is-scrolled', window.scrollY > 24); }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  var burger = $('#burger');
  var links = $('#navLinks');
  function setMenu(open) {
    links.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  burger.addEventListener('click', function () { setMenu(!links.classList.contains('is-open')); });
  $$('a', links).forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  /* ---------- Scroll reveal (also used for cards added later) ---------- */
  var io = null;
  if ('IntersectionObserver' in window) {
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  }
  function reveal(els) {
    els.forEach(function (el) { if (io) io.observe(el); else el.classList.add('is-in'); });
  }
  reveal($$('.reveal'));

  window.Luz = { $: $, $$: $$, esc: esc, reveal: reveal };

  /* ---------- View-only protection (deterrents) ---------- */
  document.addEventListener('contextmenu', function (e) { if (e.target.closest && e.target.closest('.protected')) e.preventDefault(); });
  document.addEventListener('dragstart', function (e) { if (e.target.tagName === 'IMG' && e.target.closest('.protected')) e.preventDefault(); });
})();
