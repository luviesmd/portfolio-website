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

  $('#countAll').textContent = PROJECTS.length;
  if (CONFIG.WATERMARK) document.body.classList.add('wm');

  /* ---------- Cards ---------- */
  var grid = $('#grid');
  function cardHTML(p, i) {
    var c = p.cover || p.images[0];
    var n = p.images.length;
    var unit = p.unit || 'images';
    var badge = n + ' ' + (n === 1 ? unit.replace(/s$/, '') : unit);
    var style = '--fit:' + (c.fit || 'cover') + ';--pos:' + (c.pos || 'center') + (c.bg ? ';--cbg:' + c.bg : '');
    var tags = (p.tags || []).slice(0, 4).map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('');
    return '<article class="card reveal" id="' + esc(p.id) + '" data-cat="' + esc(p.cat) + '" style="--d:' + ((i % 2) * 0.08) + 's">' +
      '<button class="card__media protected" type="button" data-open="' + esc(p.id) + '" style="' + style + '" aria-label="Open case study: ' + esc(p.title) + '">' +
        '<img src="' + esc(c.src) + '" alt="' + esc(c.alt || p.title) + '" loading="lazy" draggable="false">' +
        '<span class="card__badge">' + esc(badge) + '</span>' +
        '<span class="card__view">View case study</span>' +
      '</button>' +
      '<div class="card__body">' +
        '<p class="project__cat"><span class="card__no">' + pad(i + 1) + '</span>' + esc(catName[p.cat] || p.cat) + '</p>' +
        '<h2>' + esc(p.title) + '</h2>' +
        '<p>' + esc(p.blurb) + '</p>' +
        (tags ? '<ul class="tags">' + tags + '</ul>' : '') +
        '<button class="link" type="button" data-open="' + esc(p.id) + '">Read the case study <span aria-hidden="true">→</span></button>' +
      '</div></article>';
  }
  grid.innerHTML = PROJECTS.map(cardHTML).join('');

  var cards = $$('.card', grid);
  L.reveal(cards);
  $$('.hero .reveal').forEach(function (el) { setTimeout(function () { el.classList.add('is-in'); }, 60); });

  /* ---------- Filters ---------- */
  var filterBar = $('#filterBar');
  var empty = $('#empty');
  var currentFilter = 'all';
  (function buildFilters() {
    var counts = { all: PROJECTS.length };
    PROJECTS.forEach(function (p) { counts[p.cat] = (counts[p.cat] || 0) + 1; });
    var html = '<button class="pill is-active" type="button" data-filter="all" aria-pressed="true">All <span>' + counts.all + '</span></button>';
    CATEGORIES.forEach(function (c) {
      if (counts[c.id]) html += '<button class="pill" type="button" data-filter="' + c.id + '" aria-pressed="false">' + esc(c.label) + ' <span>' + counts[c.id] + '</span></button>';
    });
    filterBar.innerHTML = html;
  })();

  function applyFilter(f) {
    currentFilter = f;
    $$('.pill', filterBar).forEach(function (p) {
      var on = p.getAttribute('data-filter') === f;
      p.classList.toggle('is-active', on);
      p.setAttribute('aria-pressed', String(on));
    });
    var shown = 0;
    cards.forEach(function (c) {
      var match = f === 'all' || c.getAttribute('data-cat') === f;
      if (match) {
        shown++;
        c.hidden = false;
        c.classList.add('is-in');
        if (!reduce) {
          c.classList.add('is-hiding');
          requestAnimationFrame(function () { requestAnimationFrame(function () { c.classList.remove('is-hiding'); }); });
        }
      } else { c.hidden = true; }
    });
    empty.hidden = shown !== 0;
  }
  filterBar.addEventListener('click', function (e) {
    var b = e.target.closest('.pill');
    if (b) applyFilter(b.getAttribute('data-filter'));
  });

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

  function showImg(i) {
    var imgs = cur.images;
    imgIdx = (i + imgs.length) % imgs.length;
    var im = imgs[imgIdx];
    vImg.src = im.src;
    vImg.alt = im.alt || cur.title;
    $('#vCount').textContent = (imgIdx + 1) + ' / ' + imgs.length;
    $$('.thumb', vThumbs).forEach(function (t, k) { t.classList.toggle('is-active', k === imgIdx); });
    if (imgs.length > 1) { var nx = new Image(); nx.src = imgs[(imgIdx + 1) % imgs.length].src; }
  }

  function fill(id) {
    var p = byId[id];
    if (!p) return;
    cur = p;
    $('#mCat').textContent = catName[p.cat] || p.cat;
    $('#mTitle').textContent = p.title;
    $('#mIntro').textContent = p.intro || p.blurb;
    var note = $('#mNote');
    note.textContent = p.note || '';
    note.hidden = !p.note;
    $('#mSecs').innerHTML = sectionsHTML(p);
    $('#mTools').innerHTML = (p.tags || []).map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('');
    viewer.classList.toggle('is-single', p.images.length < 2);
    vThumbs.innerHTML = p.images.length < 2 ? '' : p.images.map(function (im, k) {
      return '<button class="thumb" type="button" data-i="' + k + '" aria-label="Show image ' + (k + 1) + '"><img src="' + esc(im.src) + '" alt="" draggable="false"></button>';
    }).join('');
    showImg(0);
    var ids = visibleIds();
    var pos = ids.indexOf(id);
    $('#mPrev').disabled = pos <= 0;
    $('#mNext').disabled = pos < 0 || pos >= ids.length - 1;
    scroller.scrollTop = 0;
  }
  function visibleIds() {
    return PROJECTS.filter(function (p) { return currentFilter === 'all' || p.cat === currentFilter; }).map(function (p) { return p.id; });
  }

  function openModal(id, fromHash) {
    if (!byId[id]) return;
    if (modal.hidden) lastFocus = document.activeElement;
    fill(id);
    modal.hidden = false;
    document.body.classList.add('is-locked');
    panel.focus();
    if (!fromHash) { try { history.replaceState(null, '', '#' + id); } catch (e) {} }
  }
  function closeModal() {
    if (modal.hidden) return;
    closeLb(true);
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
    if (b) openModal(b.getAttribute('data-open'));
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

  function showLb() {
    var imgs = cur.images;
    lbIdx = (lbIdx + imgs.length) % imgs.length;
    var im = imgs[lbIdx];
    lbWrap.classList.remove('is-tall');
    lbImg.onload = function () { lbWrap.classList.toggle('is-tall', lbImg.naturalHeight / lbImg.naturalWidth > 1.25); };
    lbImg.src = im.src;
    lbImg.alt = im.alt || cur.title;
    $('#lbCount').textContent = (lbIdx + 1) + ' / ' + imgs.length;
    $('#lbPrev').hidden = $('#lbNext').hidden = imgs.length < 2;
    lbScroll.scrollTop = 0;
  }
  function openLb(i) { lbIdx = i; lb.hidden = false; showLb(); $('#lbClose').focus(); }
  function closeLb(silent) {
    if (lb.hidden) return;
    lb.hidden = true;
    if (cur) showImg(lbIdx);
    if (!silent) $('#vStage').focus();
  }
  $('#lbClose').addEventListener('click', function () { closeLb(); });
  $('#lbPrev').addEventListener('click', function () { lbIdx--; showLb(); });
  $('#lbNext').addEventListener('click', function () { lbIdx++; showLb(); });
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
    if (e.key === 'Escape') closeModal();
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
