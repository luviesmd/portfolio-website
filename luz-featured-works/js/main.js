/* ==========================================================
   Luz Somodio — Featured Works
   ========================================================== */

/* ---- EDIT ME ---------------------------------------------- */
var CONFIG = {
  portfolioUrl: '../../index.html' // where the main portfolio site lives
};
/* ----------------------------------------------------------- */

/* ---- Case study content ----------------------------------- */
var PROJECTS = {
  'lead-system': {
    cat: 'AI Automation',
    title: 'AI Lead Management System',
    img: 'assets/ai-automation.webp',
    alt: 'n8n workflow that reads Gmail inquiries, scores them with Claude and updates HubSpot',
    intro: 'An always-on workflow that turns a new email inquiry into a scored, tracked lead with a follow-up already scheduled.',
    challenge: 'Inquiries arrive from several places — the inbox, website forms and manual entry. Without one process, leads can be missed, scored inconsistently or answered late.',
    built: [
      'A Gmail trigger in n8n that detects each new project inquiry.',
      'A Claude analysis step that summarizes the lead, estimates project type, budget range and urgency, and assigns a lead score.',
      'A formatting and enrichment step that cleans the data for the CRM.',
      'HubSpot updates for lead status, project type, budget and next follow-up date.',
      'Automatic follow-up tasks, plus a log of every lead in Google Sheets.',
      'A Gmail draft reply for review — nothing is sent without approval.'
    ],
    delivers: ['Every inquiry captured in one place', 'Consistent AI-assisted lead scoring', 'Follow-ups created automatically', 'A reply draft waiting for a human to approve'],
    tools: ['n8n', 'Claude', 'HubSpot', 'Gmail', 'Google Sheets']
  },
  'content-system': {
    cat: 'Social Media',
    title: 'Content Planning System',
    img: 'assets/social-media.webp',
    alt: 'Content calendar, Canva designs and Instagram and Facebook feeds',
    intro: 'A repeatable system for planning, designing and scheduling social content that stays on-brand without last-minute scrambling.',
    challenge: 'Posting was reactive and inconsistent, and ideas lived in scattered notes. The brand needed a steady, polished presence on Instagram and Facebook with very little extra budget.',
    built: [
      'A monthly content calendar mapping every post, platform and format.',
      'Content pillars: behind the scenes, project highlights, before & after, tips and education, client journey, lifestyle, Q&A and community engagement.',
      'A Canva template kit with a consistent palette, type and layouts.',
      'Scheduled publishing and community replies through Meta Business Suite.'
    ],
    delivers: ['A calendar planned ahead of time', 'A recognizable, consistent visual style', 'Faster content production through templates', 'Active community engagement'],
    tools: ['Canva', 'Instagram', 'Facebook', 'Meta Business Suite']
  },
  'admin-operations': {
    cat: 'Admin & Operations',
    title: 'Executive Admin Operations',
    img: 'assets/admin-support.webp',
    alt: 'Calendar, inbox, weekly report and task notebook on a desk',
    intro: 'The behind-the-scenes structure that keeps meetings, messages and follow-ups moving for a busy founder.',
    challenge: 'Meetings, client emails and project follow-ups competed for attention, making it hard to see what mattered each day.',
    built: [
      'A color-coded calendar with focus time, client calls and recurring reviews.',
      'An inbox organized by client and project with labels and follow-up flags.',
      'Daily task lists and a weekly planning routine.',
      'Meeting notes, follow-up emails and a simple tracker for invoices and projects.'
    ],
    delivers: ['A calmer, more predictable week', 'Fewer missed follow-ups', 'Meeting prep and notes always ready', 'One place to see what’s next'],
    tools: ['Google Calendar', 'Gmail', 'Google Sheets', 'Meeting notes']
  },
  'weekly-reporting': {
    cat: 'Reporting',
    title: 'Weekly Performance Reports',
    img: 'assets/analytics-workspace.webp',
    alt: 'Social media and website analytics across Instagram, Facebook and Google Analytics',
    intro: 'A one-page weekly snapshot that turns scattered platform numbers into decisions.',
    challenge: 'Insights were spread across Instagram, Facebook and website analytics, so it was hard to tell what was working or where to put effort next.',
    built: [
      'A weekly template pulling reach, engagement and website activity into one view.',
      'A top-content review showing which posts and formats perform best.',
      'A comments and inquiries check to catch questions that need a reply.',
      'A short “what to do next week” summary with each report.'
    ],
    delivers: ['One clear weekly view of performance', 'Evidence for what to post more of', 'Quicker, calmer planning meetings', 'Questions and comments never overlooked'],
    tools: ['Meta Business Suite', 'Google Analytics', 'Google Sheets']
  }
};
var ORDER = ['lead-system', 'content-system', 'admin-operations', 'weekly-reporting'];
/* ----------------------------------------------------------- */

(function () {
  'use strict';

  var root = document.documentElement;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ---------- Config wiring ---------- */
  $$('[data-home-link]').forEach(function (a) {
    a.href = CONFIG.portfolioUrl + (a.getAttribute('data-hash') || '');
  });
  $('#year').textContent = new Date().getFullYear();
  $('#countAll').textContent = ORDER.length;

  /* ---------- Theme toggle ---------- */
  var toggle = $('#themeToggle');
  function syncToggle() {
    toggle.setAttribute('aria-label', root.getAttribute('data-theme') === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  }
  syncToggle();
  toggle.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('luz-theme', next); } catch (e) {}
    syncToggle();
  });

  /* ---------- Reveal on scroll ---------- */
  var rv = $$('.rv');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
    }, { threshold: 0.1 });
    rv.forEach(function (el) { io.observe(el); });
  } else { rv.forEach(function (el) { el.classList.add('is-in'); }); }

  /* ---------- Filters ---------- */
  var pills = $$('.pill');
  var cards = $$('.project');
  var empty = $('#empty');
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  function applyFilter(f) {
    pills.forEach(function (p) {
      var on = p.getAttribute('data-filter') === f;
      p.classList.toggle('is-active', on);
      p.setAttribute('aria-pressed', String(on));
    });
    var shown = 0;
    cards.forEach(function (c) {
      var match = f === 'all' || c.getAttribute('data-cat') === f;
      if (match) shown++;
      if (match) {
        c.hidden = false;
        if (!reduce) { c.classList.add('is-hiding'); requestAnimationFrame(function () { requestAnimationFrame(function () { c.classList.remove('is-hiding'); }); }); }
      } else {
        c.hidden = true;
      }
    });
    empty.hidden = shown !== 0;
  }
  pills.forEach(function (p) { p.addEventListener('click', function () { applyFilter(p.getAttribute('data-filter')); }); });

  /* ---------- Modal ---------- */
  var modal = $('#modal');
  var panel = $('.modal__panel', modal);
  var fig = $('#mFig');
  var current = null;
  var lastFocus = null;

  function fill(id) {
    var d = PROJECTS[id];
    if (!d) return;
    current = id;
    $('#mCat').textContent = d.cat;
    $('#mTitle').textContent = d.title;
    $('#mIntro').textContent = d.intro;
    $('#mChallenge').textContent = d.challenge;
    var img = $('#mImg'); img.src = d.img; img.alt = d.alt;
    fig.classList.remove('is-zoomed');
    $('#mBuilt').innerHTML = d.built.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('');
    $('#mDelivers').innerHTML = d.delivers.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('');
    $('#mTools').innerHTML = d.tools.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('');
    var i = ORDER.indexOf(id);
    $('#mPrev').disabled = i <= 0;
    $('#mNext').disabled = i >= ORDER.length - 1;
    $('.modal__scroll', modal).scrollTop = 0;
  }
  function esc(s) { return s.replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

  function openModal(id, fromHash) {
    if (!PROJECTS[id]) return;
    lastFocus = document.activeElement;
    fill(id);
    modal.hidden = false;
    document.body.classList.add('is-locked');
    panel.focus();
    if (!fromHash) { try { history.replaceState(null, '', '#' + id); } catch (e) {} }
  }
  function closeModal() {
    if (modal.hidden) return;
    modal.hidden = true;
    document.body.classList.remove('is-locked');
    try { history.replaceState(null, '', location.pathname + location.search); } catch (e) {}
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  function step(dir) {
    var i = ORDER.indexOf(current) + dir;
    if (i < 0 || i >= ORDER.length) return;
    fill(ORDER[i]);
    try { history.replaceState(null, '', '#' + ORDER[i]); } catch (e) {}
  }

  $$('[data-open]').forEach(function (b) { b.addEventListener('click', function () { openModal(b.getAttribute('data-open')); }); });
  $$('[data-close]', modal).forEach(function (b) { b.addEventListener('click', closeModal); });
  $('#mPrev').addEventListener('click', function () { step(-1); });
  $('#mNext').addEventListener('click', function () { step(1); });
  fig.addEventListener('click', function () { fig.classList.toggle('is-zoomed'); });

  document.addEventListener('keydown', function (e) {
    if (modal.hidden) return;
    if (e.key === 'Escape') { closeModal(); return; }
    if (e.key === 'ArrowLeft') step(-1);
    if (e.key === 'ArrowRight') step(1);
    if (e.key === 'Tab') { /* keep focus inside the dialog */
      var f = $$('button:not(:disabled), [href], [tabindex]:not([tabindex="-1"])', panel).filter(function (el) { return el.offsetParent !== null; });
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && (document.activeElement === first || document.activeElement === panel)) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* ---------- Deep link: index.html#lead-system opens that case study ---------- */
  function fromHash() {
    var id = location.hash.replace('#', '');
    if (PROJECTS[id]) {
      var card = document.getElementById(id);
      if (card) card.scrollIntoView();
      openModal(id, true);
    }
  }
  window.addEventListener('hashchange', function () {
    var id = location.hash.replace('#', '');
    if (PROJECTS[id]) { if (modal.hidden) openModal(id, true); else fill(id); }
  });
  fromHash();
})();
