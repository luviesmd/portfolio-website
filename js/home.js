/* ==========================================================
   Home page: featured-works teaser, scrollspy, hero parallax
   ========================================================== */
(function () {
  'use strict';
  var L = window.Luz, $ = L.$, $$ = L.$$, esc = L.esc;

  /* ---------- Featured-works teaser (from works-data.js) ---------- */
  var catName = {};
  CATEGORIES.forEach(function (c) { catName[c.id] = c.label; });
  var picks = PROJECTS.filter(function (p) { return p.teaser; }).sort(function (a, b) { return a.teaser - b.teaser; });
  var box = $('#teaser');
  if (box) {
    box.innerHTML = picks.map(function (p, i) {
      var c = p.cover || p.images[0];
      return '<a class="work' + (i === 0 ? ' work--lg' : '') + ' reveal" style="--d:' + (i * 0.08) + 's" href="featured-works.html#' + esc(p.id) + '">' +
        '<img src="' + esc(c.src) + '" alt="' + esc(c.alt || p.title) + '" loading="lazy" style="object-position:' + esc(c.pos || 'center') + '">' +
        '<div class="work__meta"><span>' + esc(catName[p.cat] || p.cat) + '</span><h3>' + esc(p.title) + '</h3></div></a>';
    }).join('');
    L.reveal($$('.work', box));
  }
  var n = $('#worksCount');
  if (n) n.textContent = PROJECTS.length;

  /* ---------- Active link highlight ---------- */
  var links = $('#navLinks');
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

  /* ---------- Hero parallax (desktop pointer only) ---------- */
  var frame = $('#heroFrame');
  var luz = $('#heroLuz');
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (frame && luz && !reduce && window.matchMedia('(hover: hover)').matches) {
    frame.addEventListener('mousemove', function (e) {
      var r = frame.getBoundingClientRect();
      luz.style.setProperty('--px', (((e.clientX - r.left) / r.width - 0.5) * 16) + 'px');
      luz.style.setProperty('--py', (((e.clientY - r.top) / r.height - 0.5) * 10) + 'px');
    });
    frame.addEventListener('mouseleave', function () {
      luz.style.setProperty('--px', '0px');
      luz.style.setProperty('--py', '0px');
    });
  }
})();
