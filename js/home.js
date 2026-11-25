/* ==========================================================
   Home page: featured-works teaser, scrollspy, hero parallax
   ========================================================== */
(function () {
  'use strict';
  var L = window.Luz, $ = L.$, $$ = L.$$, esc = L.esc;

  /* ---------- Projects carousel: random order, glides with page scroll ---------- */
  var catName = {};
  CATEGORIES.forEach(function (c) { catName[c.id] = c.label; });
  var order = PROJECTS.slice();
  for (var i = order.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = order[i]; order[i] = order[j]; order[j] = tmp;
  }
  var n = $('#worksCount');
  if (n) n.textContent = PROJECTS.length;

  var car = $('#carousel'), belt = $('#carouselTrack');
  if (car && belt) {
    var pad2 = function (k) { return (k < 10 ? '0' : '') + k; };
    belt.innerHTML = order.map(function (p, k) {
      var c = p.cover || p.images[0];
      var reel = p.images.some(function (x) { return x.video; });
      return '<a class="slide" href="featured-works.html#' + esc(p.id) + '" draggable="false">' +
        '<span class="slide__frame"' + (c.bg ? ' style="background:' + esc(c.bg) + '"' : '') + '><img src="' + esc(c.src) + '" alt="' + esc(c.alt || p.title) + '" loading="lazy" draggable="false" style="object-fit:' + esc(c.fit || 'cover') + ';object-position:' + esc(c.pos || 'center') + '">' +
        (reel ? '<span class="play" aria-hidden="true"><svg viewBox="0 0 24 24" width="16" height="16"><path d="M8 5.5v13l11-6.5z" fill="currentColor"/></svg></span>' : '') + '</span>' +
        '<span class="slide__cap"><span class="slide__no">' + pad2(k + 1) + '</span><span class="slide__cat">' + esc(catName[p.cat] || p.cat) + '</span><h3>' + esc(p.title) + '</h3></span></a>';
    }).join('');

    var prev = $('#carPrev'), next = $('#carNext'), bar = $('#carBar');
    var slides = $$('.slide', belt);
    var reduceMotion = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    var gap = 60;

    if (reduceMotion) {
      /* calm fallback: an ordinary swipeable row */
      car.classList.add('carousel--native');
      $('#work').classList.add('pin--static');
      var stepN = function () { return (slides[0] ? slides[0].getBoundingClientRect().width : 300) + gap; };
      prev.addEventListener('click', function () { car.scrollBy({ left: -stepN() * 2 }); });
      next.addEventListener('click', function () { car.scrollBy({ left: stepN() * 2 }); });
    } else {
      var speed = (typeof CONFIG.carouselScroll === 'number' && CONFIG.carouselScroll > 0) ? CONFIG.carouselScroll : 1.4;
      var cur = 0, target = 0, manual = 0, max = 0, raf = 0;
      var geo = [];
      var clamp = function (v, a, b) { return Math.max(a, Math.min(b, v)); };
      var measure = function () {
        max = Math.max(0, belt.scrollWidth - car.clientWidth);
        pin.style.height = Math.round(max / Math.max(0.2, speed) + window.innerHeight) + 'px';
        geo = slides.map(function (s) { return { l: s.offsetLeft, w: s.offsetWidth, img: $('img', s), frame: $('.slide__frame', s), cap: $('.slide__cap', s) }; });
      };
      var pin = $('#work');
      var travel = 1;
      var base = function () {
        var r = pin.getBoundingClientRect();
        var span = Math.max(1, pin.offsetHeight - window.innerHeight);
        return clamp(-r.top / span, 0, 1) * max;
      };
      var compute = function () { target = clamp(base() + manual, 0, max); };
      var render = function () {
        raf = 0;
        cur += (target - cur) * 0.12;
        if (Math.abs(target - cur) < 0.3) cur = target;
        belt.style.transform = 'translate3d(' + (-cur).toFixed(1) + 'px,0,0)';
        var vw = car.clientWidth;
        for (var k = 0; k < geo.length; k++) {
          var g = geo[k], left = g.l - cur;
          if (left > vw + 200 || left + g.w < -200) continue;
          var dist = (left + g.w / 2 - vw / 2) / (g.w * 1.3);      /* 0 = in the middle, 1 = one circle away */
          var t = Math.max(0, 1 - Math.abs(dist));
          var e = t * t * (3 - 2 * t);
          var fs = g.frame.style;
          fs.setProperty('--s', (0.72 + 0.5 * e).toFixed(3));
          fs.setProperty('--o', (0.5 + 0.5 * e).toFixed(3));
          g.cap.style.setProperty('--c', Math.max(0, (e - 0.55) / 0.45).toFixed(3));
          g.img.style.transform = 'translate3d(' + (Math.max(-1, Math.min(1, dist)) * -22).toFixed(1) + 'px,0,0)';
        }
        if (bar) bar.style.transform = 'scaleX(' + (max ? (cur / max).toFixed(4) : 0) + ')';
        prev.disabled = cur < 4 && target < 4;
        next.disabled = cur > max - 4 && target > max - 4;
        if (cur !== target) raf = requestAnimationFrame(render);
      };
      var kick = function () { compute(); if (!raf) raf = requestAnimationFrame(render); };
      var setManual = function (m) { var t = clamp(base() + m, 0, max); manual = t - base(); kick(); };
      var stepPx = function () { return (geo[0] ? geo[0].w : 300) + gap; };

      measure(); kick();
      window.addEventListener('scroll', kick, { passive: true });
      window.addEventListener('resize', function () { measure(); kick(); });
      window.addEventListener('load', function () { measure(); kick(); });
      prev.addEventListener('click', function () { setManual(manual - stepPx() * 2); });
      next.addEventListener('click', function () { setManual(manual + stepPx() * 2); });
      car.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight') { e.preventDefault(); setManual(manual + stepPx()); }
        else if (e.key === 'ArrowLeft') { e.preventDefault(); setManual(manual - stepPx()); }
      });

      /* drag / swipe sideways (vertical page scrolling still works on touch) */
      var down = null, moved = false;
      car.addEventListener('pointerdown', function (e) {
        if (e.pointerType === 'mouse' && e.button !== 0) return;
        down = { x: e.clientX, m: manual }; moved = false;
      });
      window.addEventListener('pointermove', function (e) {
        if (!down) return;
        var dx = e.clientX - down.x;
        if (!moved && Math.abs(dx) > 6) { moved = true; car.classList.add('is-dragging'); }
        if (moved) setManual(down.m - dx);
      });
      var end = function () { if (down) { down = null; car.classList.remove('is-dragging'); } };
      window.addEventListener('pointerup', end);
      window.addEventListener('pointercancel', end);
      belt.addEventListener('click', function (e) { if (moved) { e.preventDefault(); moved = false; } });
    }
  }

  /* ---------- Service cards: a tap lifts one card (hover does it on desktop) ---------- */
  var svcs = $$('.svc');
  svcs.forEach(function (c) {
    c.addEventListener('click', function () {
      var on = c.classList.contains('is-up');
      svcs.forEach(function (o) { o.classList.remove('is-up'); });
      if (!on) c.classList.add('is-up');
    });
    c.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); c.click(); } });
  });
  document.addEventListener('click', function (e) { if (!e.target.closest('.svc')) svcs.forEach(function (o) { o.classList.remove('is-up'); }); });

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
