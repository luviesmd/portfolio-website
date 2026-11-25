/* ==========================================================
   Featured Works page: cards, filters, case-study modal, viewer
   (the works themselves live in works-data.js)
   ========================================================== */
(function () {
  'use strict';

  var L = window.Luz, $ = L.$, $$ = L.$$, esc = L.esc;
  var pad = function (n) { return (n < 10 ? '0' : '') + n; };
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  var byId = {};
  PROJECTS.forEach(function (p) { byId[p.id] = p; });
  var catName = {};
  CATEGORIES.forEach(function (c) { catName[c.id] = c.label; });

  if ($('#countAll')) $('#countAll').textContent = PROJECTS.length;
  if (CONFIG.WATERMARK) document.body.classList.add('wm');

  /* ---------- Showcase: one big, swipeable row per category ---------- */
  var grid = $('#grid');
  var currentFilter = 'all', currentSub = 'all';   /* the modal's Previous / Next walks every project in order */
  var filterBar = $('#filterBar');
  var shownCats = CATEGORIES.filter(function (c) { return PROJECTS.some(function (p) { return p.cat === c.id; }); });

  function slideHTML(p, k) {
    var im = p.images[k];
    var n = p.images.length;
    var isVid = !!im.video;
    return '<figure class="shot">' +
      '<button class="shot__media protected" type="button" data-open="' + esc(p.id) + '" data-img="' + k + '" aria-label="Open ' + esc(p.title) + (n > 1 ? ' (' + (k + 1) + ' of ' + n + ')' : '') + '">' +
        (isVid
          ? '<video class="shot__vid" data-src="' + esc(im.video) + '" poster="' + esc(im.src) + '" muted loop playsinline preload="none" disablepictureinpicture disableremoteplayback controlslist="nodownload noremoteplayback" aria-label="' + esc(im.alt || p.title) + '"></video>'
          : '<img src="' + esc(im.src) + '" alt="' + esc(im.alt || p.title) + '" loading="lazy" draggable="false">') +
      '</button>' +
      '<figcaption><span class="shot__t">' + esc(im.title || p.title) + '</span><span class="shot__s">' + (n > 1 ? (k + 1) + ' / ' + n + ' · ' : '') + esc(p.sub || catName[p.cat] || '') + (im.title ? ' · ' + esc(p.title) : '') + '</span></figcaption></figure>';
  }
  grid.innerHTML = shownCats.map(function (c) {
    var items = [];
    var projs = PROJECTS.filter(function (p) { return p.cat === c.id; });
    var vids = [], pics = [];
    projs.forEach(function (p) { p.images.forEach(function (im, k) { (im.video ? vids : pics).push(slideHTML(p, k)); }); });
    items = vids.concat(pics);   /* videos first */
    return '<section class="show reveal" id="cat-' + c.id + '" data-cat="' + c.id + '">' +
      '<header class="show__head"><h2>' + esc(c.label) + '</h2><p>' + projs.length + (projs.length === 1 ? ' project' : ' projects') + ' · ' + items.length + ' pieces</p></header>' +
      '<div class="show__stage">' +
        '<button class="show__arrow show__arrow--prev" type="button" aria-label="Previous in ' + esc(c.label) + '">‹</button>' +
        '<div class="show__track" tabindex="0" role="region" aria-label="' + esc(c.label) + ' works">' + items.join('') + '</div>' +
        '<button class="show__arrow show__arrow--next" type="button" aria-label="Next in ' + esc(c.label) + '">›</button>' +
      '</div>' +
      '<div class="show__dots" role="group" aria-label="Slides">' + items.map(function (_, i) { return '<button type="button" data-dot="' + i + '" aria-label="Go to slide ' + (i + 1) + '"></button>'; }).join('') + '</div>' +
    '</section>';
  }).join('');

  var sections = $$('.show', grid);
  L.reveal(sections);
  $$('.fw-hero .reveal').forEach(function (el) { setTimeout(function () { el.classList.add('is-in'); }, 60); });

  sections.forEach(function (sec) {
    var track = $('.show__track', sec), slides = $$('.shot', track), dots = $$('.show__dots button', sec);
    var prev = $('.show__arrow--prev', sec), next = $('.show__arrow--next', sec);
    var active = -1, ticking = false;
    function step() { return slides.length > 1 ? slides[1].offsetLeft - slides[0].offsetLeft : track.clientWidth; }
    function update() {
      ticking = false;
      var i = Math.round(track.scrollLeft / Math.max(1, step()));
      i = Math.max(0, Math.min(slides.length - 1, i));
      if (i !== active) {
        if (dots[active]) dots[active].classList.remove('is-on');
        active = i; dots[i].classList.add('is-on');
      }
      prev.disabled = track.scrollLeft < 8;
      next.disabled = track.scrollLeft > track.scrollWidth - track.clientWidth - 8;
    }
    function goTo(i) { track.scrollTo({ left: Math.max(0, Math.min(slides.length - 1, i)) * step(), behavior: reduce ? 'auto' : 'smooth' }); }
    track.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    window.addEventListener('resize', update);
    prev.addEventListener('click', function () { goTo(active - 1); });
    next.addEventListener('click', function () { goTo(active + 1); });
    dots.forEach(function (d, i) { d.addEventListener('click', function () { goTo(i); }); });
    track.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { e.preventDefault(); goTo(active + 1); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(active - 1); }
    });
    /* mouse drag (touch uses normal swiping) */
    var down = null, moved = false;
    track.addEventListener('pointerdown', function (e) {
      if (e.pointerType !== 'mouse' || e.button !== 0) return;
      down = { x: e.clientX, s: track.scrollLeft }; moved = false;
    });
    window.addEventListener('pointermove', function (e) {
      if (!down) return;
      var dx = e.clientX - down.x;
      if (!moved && Math.abs(dx) > 6) { moved = true; track.classList.add('is-dragging'); }
      if (moved) track.scrollLeft = down.s - dx;
    });
    window.addEventListener('pointerup', function () { if (down) { down = null; track.classList.remove('is-dragging'); } });
    track.addEventListener('click', function (e) { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);
    update();
  });

  /* videos play silently on a loop while they are on screen, and rest when they are not */
  var vidEls = $$('.shot__vid', grid);
  if (vidEls.length && 'IntersectionObserver' in window && !reduce) {
    var vio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var v = en.target;
        if (en.isIntersecting) {
          if (!v.getAttribute('src')) v.src = v.getAttribute('data-src');
          var pr = v.play(); if (pr && pr.catch) pr.catch(function () {});
        } else if (v.getAttribute('src')) { v.pause(); }
      });
    }, { threshold: 0.45 });
    vidEls.forEach(function (v) { vio.observe(v); });
  }

  /* category chips jump to their row */
  filterBar.innerHTML = shownCats.map(function (c) {
    var count = PROJECTS.filter(function (p) { return p.cat === c.id; }).length;
    return '<button class="pill" type="button" data-jump="cat-' + c.id + '">' + esc(c.label) + ' <span>' + count + '</span></button>';
  }).join('');
  filterBar.addEventListener('click', function (e) {
    var b = e.target.closest('[data-jump]');
    if (!b) return;
    var el = document.getElementById(b.getAttribute('data-jump'));
    if (el) el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  });
  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        $$('.pill', filterBar).forEach(function (p) { p.classList.toggle('is-active', p.getAttribute('data-jump') === en.target.id); });
      });
    }, { rootMargin: '-35% 0px -55% 0px' });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---------- Case study modal ---------- */
  var modal = $('#modal');
  var panel = $('.modal__panel', modal);
  var scroller = $('#mScroll');
  var viewer = $('#viewer');
  var vImg = $('#vImg');
  var vThumbs = $('#vThumbs');
  var cur = null;
  var imgIdx = 0;
  var lastFocus = null;

  function secHTML(s) {
    var h = '<section><h3>' + esc(s.title) + '</h3>';
    if (s.text) h += '<p>' + esc(s.text) + '</p>';
    if (s.steps) h += '<ol class="built">' + s.steps.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ol>';
    if (s.list) h += '<ul class="checks">' + s.list.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul>';
    return h + '</section>';
  }
  function sectionsHTML(p) {
    var plain = (p.sections || []).filter(function (s) { return !s.cards; });
    var wide = (p.sections || []).filter(function (s) { return s.cards; });
    var h = plain.length ? '<div class="cols">' + plain.map(secHTML).join('') + '</div>' : '';
    wide.forEach(function (s) {
      h += '<section class="wide"><h3>' + esc(s.title) + '</h3><ul class="delivers">' + s.cards.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul></section>';
    });
    return h;
  }

  var vVideo = $('#vVideo');
  var vMain = $('.viewer__main');
  function stopVideo() {
    if (!vVideo) return;
    try { vVideo.pause(); } catch (e) {}
    vVideo.removeAttribute('src');
    vVideo.removeAttribute('poster');
    vVideo.load();
    vVideo.hidden = true;
    vMain.classList.remove('is-video');
  }
  function showImg(i) {
    var imgs = cur.images;
    imgIdx = (i + imgs.length) % imgs.length;
    var im = imgs[imgIdx];
    if (im.video) {
      vVideo.poster = im.src;
      vVideo.src = im.video;
      vVideo.setAttribute('aria-label', im.title || im.alt || cur.title);
      vVideo.hidden = false;
      vMain.classList.add('is-video');
    } else {
      stopVideo();
      vImg.src = im.src;
      vImg.alt = im.alt || cur.title;
    }
    $('#vCount').textContent = (imgIdx + 1) + ' / ' + imgs.length;
    $$('.thumb', vThumbs).forEach(function (t, k) { t.classList.toggle('is-active', k === imgIdx); });
    if (imgs.length > 1) { var nx = imgs[(imgIdx + 1) % imgs.length]; if (!nx.video) { var pre = new Image(); pre.src = nx.src; } }
  }

  function fill(id) {
    var p = byId[id];
    if (!p) return;
    cur = p;
    $('#mCat').textContent = (catName[p.cat] || p.cat) + (p.sub ? ' · ' + p.sub : '');
    $('#mTitle').textContent = p.title;
    $('#mIntro').textContent = p.intro || p.blurb;
    var note = $('#mNote');
    note.textContent = p.note || '';
    note.hidden = !p.note;
    var why = $('#mWhy');
    why.hidden = !p.why;
    if (p.why) why.innerHTML = '<p class="why__label">Why I made it this way</p><p class="why__hook"><span>The hook</span>' + esc(p.why.hook) + '</p><p class="why__text">' + esc(p.why.reason) + '</p>';
    $('#mSecs').innerHTML = sectionsHTML(p);
    $('#mTools').innerHTML = (p.tags || []).map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('');
    viewer.classList.toggle('is-single', p.images.length < 2);
    vThumbs.innerHTML = p.images.length < 2 ? '' : p.images.map(function (im, k) {
      return '<button class="thumb' + (im.video ? ' thumb--video' : '') + '" type="button" data-i="' + k + '" aria-label="Show ' + (im.video ? 'reel ' : 'image ') + (k + 1) + '"><img src="' + esc(im.src) + '" alt="" draggable="false"></button>';
    }).join('');
    showImg(0);
    var ids = visibleIds();
    var pos = ids.indexOf(id);
    $('#mPrev').disabled = pos <= 0;
    $('#mNext').disabled = pos < 0 || pos >= ids.length - 1;
    scroller.scrollTop = 0;
  }
  function visibleIds() {
    return PROJECTS.filter(function (p) { return (currentFilter === 'all' || p.cat === currentFilter) && (currentSub === 'all' || p.sub === currentSub); }).map(function (p) { return p.id; });
  }

  function openModal(id, fromHash, startImg) {
    if (!byId[id]) return;
    if (modal.hidden) lastFocus = document.activeElement;
    fill(id);
    if (startImg) showImg(startImg);
    modal.hidden = false;
    document.body.classList.add('is-locked');
    panel.focus();
    if (!fromHash) { try { history.replaceState(null, '', '#' + id); } catch (e) {} }
  }
  function closeModal() {
    if (modal.hidden) return;
    closeLb(true);
    stopVideo();
    modal.hidden = true;
    document.body.classList.remove('is-locked');
    try { history.replaceState(null, '', location.pathname + location.search); } catch (e) {}
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  function stepProject(dir) {
    var ids = visibleIds();
    var i = ids.indexOf(cur.id) + dir;
    if (i < 0 || i >= ids.length) return;
    fill(ids[i]);
    try { history.replaceState(null, '', '#' + ids[i]); } catch (e) {}
  }

  grid.addEventListener('click', function (e) {
    var b = e.target.closest('[data-open]');
    if (b) openModal(b.getAttribute('data-open'), false, parseInt(b.getAttribute('data-img') || '0', 10));
  });
  $$('[data-close]', modal).forEach(function (b) { b.addEventListener('click', closeModal); });
  $('#mPrev').addEventListener('click', function () { stepProject(-1); });
  $('#mNext').addEventListener('click', function () { stepProject(1); });
  $('#vPrev').addEventListener('click', function () { showImg(imgIdx - 1); });
  $('#vNext').addEventListener('click', function () { showImg(imgIdx + 1); });
  vThumbs.addEventListener('click', function (e) {
    var t = e.target.closest('.thumb');
    if (t) showImg(parseInt(t.getAttribute('data-i'), 10));
  });
  $('#vStage').addEventListener('click', function () { openLb(imgIdx); });

  /* ---------- Full-screen image viewer ---------- */
  var lb = $('#lb');
  var lbImg = $('#lbImg');
  var lbWrap = $('#lbWrap');
  var lbScroll = $('#lbScroll');
  var lbIdx = 0;

  var lbDir = 1;
  function showLb() {
    var imgs = cur.images;
    lbIdx = (lbIdx + imgs.length) % imgs.length;
    for (var g = 0; imgs[lbIdx].video && g < imgs.length; g++) lbIdx = (lbIdx + lbDir + imgs.length) % imgs.length;
    var im = imgs[lbIdx];
    lbWrap.classList.remove('is-tall');
    lbImg.onload = function () { lbWrap.classList.toggle('is-tall', lbImg.naturalHeight / lbImg.naturalWidth > 1.25); };
    lbImg.src = im.src;
    lbImg.alt = im.alt || cur.title;
    $('#lbCount').textContent = (lbIdx + 1) + ' / ' + imgs.length;
    $('#lbPrev').hidden = $('#lbNext').hidden = imgs.length < 2;
    lbScroll.scrollTop = 0;
  }
  function openLb(i) { lbDir = 1; lbIdx = i; lb.hidden = false; showLb(); $('#lbClose').focus(); }
  function closeLb(silent) {
    if (lb.hidden) return;
    lb.hidden = true;
    if (cur) showImg(lbIdx);
    if (!silent) $('#vStage').focus();
  }
  $('#lbClose').addEventListener('click', function () { closeLb(); });
  $('#lbPrev').addEventListener('click', function () { lbDir = -1; lbIdx--; showLb(); });
  $('#lbNext').addEventListener('click', function () { lbDir = 1; lbIdx++; showLb(); });
  lbScroll.addEventListener('click', function (e) { if (e.target === lbScroll) closeLb(); });

  /* ---------- Swipe on touch screens ---------- */
  function swipe(el, onLeft, onRight) {
    var x0 = null;
    el.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    el.addEventListener('touchend', function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      x0 = null;
      if (Math.abs(dx) > 50) { if (dx < 0) onLeft(); else onRight(); }
    }, { passive: true });
  }
  swipe($('#vStage'), function () { if (cur.images.length > 1) showImg(imgIdx + 1); }, function () { if (cur.images.length > 1) showImg(imgIdx - 1); });
  swipe(lbScroll, function () { if (cur.images.length > 1) { lbIdx++; showLb(); } }, function () { if (cur.images.length > 1) { lbIdx--; showLb(); } });

  /* ---------- Keyboard ---------- */
  function trap(e, container) {
    var f = $$('button:not(:disabled):not([hidden]), [href], [tabindex]:not([tabindex="-1"])', container).filter(function (el) { return el.offsetParent !== null; });
    if (!f.length) return;
    var first = f[0], last = f[f.length - 1];
    if (e.shiftKey && (document.activeElement === first || document.activeElement === container)) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
  document.addEventListener('keydown', function (e) {
    if (!lb.hidden) {
      if (e.key === 'Escape') closeLb();
      else if (e.key === 'ArrowLeft' && cur.images.length > 1) { lbIdx--; showLb(); }
      else if (e.key === 'ArrowRight' && cur.images.length > 1) { lbIdx++; showLb(); }
      else if (e.key === 'Tab') trap(e, lb);
      return;
    }
    if (modal.hidden) return;
    var onVideo = e.target && e.target.tagName === 'VIDEO';
    if (e.key === 'Escape') closeModal();
    else if (onVideo) return;
    else if (e.key === 'ArrowLeft' && cur.images.length > 1) showImg(imgIdx - 1);
    else if (e.key === 'ArrowRight' && cur.images.length > 1) showImg(imgIdx + 1);
    else if (e.key === 'Tab') trap(e, panel);
  });

  /* ---------- Deep link: index.html#lead-system opens that case study ---------- */
  function fromHash() {
    var id = location.hash.replace('#', '');
    if (byId[id]) {
      var card = document.getElementById(id);
      if (card) card.scrollIntoView();
      openModal(id, true);
    }
  }
  window.addEventListener('hashchange', function () {
    var id = location.hash.replace('#', '');
    if (byId[id]) { if (modal.hidden) openModal(id, true); else fill(id); }
  });
  fromHash();
})();
