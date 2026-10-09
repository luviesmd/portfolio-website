/* ==========================================================
   Luz Somodio — Portfolio
   ========================================================== */

/* ---- EDIT ME ---------------------------------------------- */
var CONFIG = {
  email: 'somodioluz@gmail.com',                    // shown in the footer; the buttons open an email to this address
  featuredWorksUrl: '../../luz-featured-works/index.html' // where the Featured Works site lives
};
/* ----------------------------------------------------------- */

(function () {
  'use strict';

  var root = document.documentElement;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ---------- Config wiring ---------- */
  var emailLink = $('#emailLink');
  if (emailLink) {
    emailLink.href = 'mailto:' + CONFIG.email;
    emailLink.textContent = CONFIG.email;
  }
  var emailBtn = $('#emailBtn');
  if (emailBtn) emailBtn.href = 'mailto:' + CONFIG.email + '?subject=' + encodeURIComponent('Project inquiry');
  /* Pricing buttons: open an email with a subject for that service */
  $$('[data-email-link]').forEach(function (a) {
    var s = a.getAttribute('data-subject') || 'Project inquiry';
    a.href = 'mailto:' + CONFIG.email + '?subject=' + encodeURIComponent(s);
  });
  $$('[data-works-link]').forEach(function (a) {
    var p = a.getAttribute('data-project');
    a.href = CONFIG.featuredWorksUrl + (p ? '#' + p : '');
  });
  var yr = $('#year');
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---------- Theme toggle ---------- */
  var toggle = $('#themeToggle');
  function syncToggleLabel() {
    var dark = root.getAttribute('data-theme') === 'dark';
    toggle.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
  }
  if (toggle) {
    syncToggleLabel();
    toggle.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('luz-theme', next); } catch (e) {}
      syncToggleLabel();
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

  /* ---------- Active link highlight ---------- */
  var sections = $$('main section[id]').filter(function (s) { return $('a[href="#' + s.id + '"]', links); });
  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          $$('a', links).forEach(function (a) { a.classList.toggle('is-active', a.getAttribute('href') === '#' + en.target.id); });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---------- Scroll reveal ---------- */
  var reveals = $$('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ---------- Hero parallax (desktop pointer only) ---------- */
  var frame = $('#heroFrame');
  var luz = $('#heroLuz');
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (frame && luz && !reduce && window.matchMedia('(hover: hover)').matches) {
    frame.addEventListener('mousemove', function (e) {
      var r = frame.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - 0.5;
      var y = (e.clientY - r.top) / r.height - 0.5;
      luz.style.setProperty('--px', (x * 16) + 'px');
      luz.style.setProperty('--py', (y * 10) + 'px');
    });
    frame.addEventListener('mouseleave', function () {
      luz.style.setProperty('--px', '0px');
      luz.style.setProperty('--py', '0px');
    });
  }

})();
