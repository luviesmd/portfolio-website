/* ==========================================================
   Luz Somodio — Featured Works
   ----------------------------------------------------------
   HOW TO ADD A NEW WORK
   1. Put web-sized images in assets/works/ (WebP or JPG, ~1600px wide).
   2. Add a block to the PROJECTS list below (copy an existing one).
   3. Save. The card, filter count and case study appear automatically.
   ========================================================== */

/* ---- EDIT ME ---------------------------------------------- */
var CONFIG = {
  portfolioUrl: '../luz-portfolio/index.html', // where the main portfolio site lives
  WATERMARK: true                               // subtle "© LUZ SOMODIO" over enlarged images
};

var CATEGORIES = [
  { id: 'ai',        label: 'AI Automation' },
  { id: 'social',    label: 'Social Media Management' },
  { id: 'design',    label: 'Graphic Design' },
  { id: 'docs',      label: 'Proposals & Documents' },
  { id: 'ops',       label: 'Admin & Operations' },
  { id: 'reporting', label: 'Reporting' }
];

/* Project fields:
   id, cat, title, blurb (card text), intro (case study), images [{src, alt}],
   cover {src, alt, fit:'cover'|'contain', pos, bg}  (optional; defaults to first image)
   sections [{title, text | steps | list | cards}], tags [], note (optional), unit (optional) */
var PROJECTS = [
  {
    id: 'lead-system', cat: 'ai',
    title: 'AI Lead Management System',
    blurb: 'An n8n workflow that catches every new inquiry, has Claude summarize and score it, updates the CRM and leaves a reply ready for review.',
    intro: 'An always-on workflow that turns a new email inquiry into a scored, tracked lead with a follow-up already scheduled.',
    images: [
      { src: 'assets/ai-automation.webp', alt: 'n8n workflow that reads Gmail inquiries, scores them with Claude and updates HubSpot' },
      { src: 'assets/works/gmail-1.webp', alt: 'Gmail inbox with an AI-generated draft reply waiting for review' }
    ],
    sections: [
      { title: 'The challenge', text: 'Inquiries arrive from several places — the inbox, website forms and manual entry. Without one process, leads can be missed, scored inconsistently or answered late.' },
      { title: 'What I built', steps: [
        'A Gmail trigger in n8n that detects each new project inquiry.',
        'A Claude analysis step that summarizes the lead, estimates project type, budget range and urgency, and assigns a lead score.',
        'A formatting and enrichment step that cleans the data for the CRM.',
        'HubSpot updates for lead status, project type, budget and next follow-up date.',
        'Automatic follow-up tasks, plus a log of every lead in Google Sheets.',
        'A Gmail draft reply for review — nothing is sent without approval.'
      ] },
      { title: 'What it delivers', cards: ['Every inquiry captured in one place', 'Consistent AI-assisted lead scoring', 'Follow-ups created automatically', 'A reply draft waiting for a human to approve'] }
    ],
    tags: ['n8n', 'Claude', 'HubSpot', 'Gmail', 'Google Sheets']
  },
  {
    id: 'meta-insights', cat: 'social',
    title: 'Meta Insights & Social Media Management',
    blurb: 'Facebook and Instagram performance tracked in Meta Business Suite — views, interactions, follows, top content and audience.',
    intro: 'Regular check-ins on Meta Business Suite Insights to see what the audience watches, interacts with and follows.',
    unit: 'screenshots',
    note: 'Account names, post titles and thumbnails are blurred to protect client privacy.',
    cover: { src: 'assets/works/meta-insights-1.webp', alt: 'Meta Business Suite content overview with post details blurred', pos: 'top center' },
    images: [
      { src: 'assets/works/meta-insights-1.webp', alt: 'Meta Business Suite content overview: views, interactions and top content, with post details blurred' },
      { src: 'assets/works/meta-insights-2.webp', alt: 'Meta Business Suite performance overview with recent content blurred' },
      { src: 'assets/works/meta-insights-3.webp', alt: 'Meta Business Suite audience demographics: age, gender, top cities and countries' }
    ],
    sections: [
      { title: 'What’s tracked', list: [
        'Views, 3-second views and watch time',
        'Content interactions, follows and unfollows',
        'Top content by views and by format',
        'Audience age, gender, cities and countries'
      ] },
      { title: 'How it’s used', text: 'Each period’s numbers are reviewed to see which formats earn reach and engagement, so the next content plan leans toward what the audience responds to.' }
    ],
    tags: ['Meta Business Suite', 'Facebook', 'Instagram', 'Analytics']
  },
  {
    id: 'content-system', cat: 'social',
    title: 'Content Planning System',
    blurb: 'A monthly content calendar, Canva template kit and content pillars that keep Instagram and Facebook consistent and scheduled ahead.',
    intro: 'A repeatable system for planning, designing and scheduling social content that stays on-brand without last-minute scrambling.',
    images: [
      { src: 'assets/social-media.webp', alt: 'Content calendar, Canva designs and Instagram and Facebook feeds' }
    ],
    sections: [
      { title: 'The challenge', text: 'Posting was reactive and inconsistent, and ideas lived in scattered notes. The brand needed a steady, polished presence on Instagram and Facebook with very little extra budget.' },
      { title: 'What I built', steps: [
        'A monthly content calendar mapping every post, platform and format.',
        'Content pillars: behind the scenes, project highlights, before & after, tips and education, client journey, lifestyle, Q&A and community engagement.',
        'A Canva template kit with a consistent palette, type and layouts.',
        'Scheduled publishing and community replies through Meta Business Suite.'
      ] },
      { title: 'What it delivers', cards: ['A calendar planned ahead of time', 'A recognizable, consistent visual style', 'Faster content production through templates', 'Active community engagement'] }
    ],
    tags: ['Canva', 'Instagram', 'Facebook', 'Meta Business Suite']
  },
  {
    id: 'greenleaf-village', cat: 'design',
    title: 'GreenLeaf Village Signage & Banners',
    blurb: 'Roadside signs and fabric banners for a residential community, shown as flat artwork and on-site mockups.',
    intro: 'Signage and banner designs for GreenLeaf Village, built around the line “Plant Yourself Here.” and a calm green-and-gold palette.',
    cover: { src: 'assets/works/greenleaf-1.webp', alt: 'GreenLeaf Village roadside sign mockup' },
    images: [
      { src: 'assets/works/greenleaf-1.webp', alt: 'Two GreenLeaf Village sign panels beside a country road' },
      { src: 'assets/works/greenleaf-2.webp', alt: 'GreenLeaf Village sign panels in a field' },
      { src: 'assets/works/greenleaf-3.webp', alt: 'GreenLeaf Village fabric pole banners, 2.5 ft by 8 ft' },
      { src: 'assets/works/greenleaf-4.webp', alt: 'GreenLeaf Village sign artwork, flat' }
    ],
    sections: [
      { title: 'What’s included', list: [
        'Two sign panels with a shaped leaf-inspired top edge',
        'Fabric pole banners, 2.5 ft × 8 ft',
        'Flat artwork alongside on-site mockups',
        'Consistent messaging: spacious homes, 3+ acre lots, established community and natural surroundings'
      ] }
    ],
    tags: ['Signage', 'Banners', 'Branding', 'Mockups']
  },
  {
    id: 'weekly-reporting', cat: 'reporting',
    title: 'Weekly Performance Reports',
    blurb: 'A one-page weekly snapshot of reach, engagement, top content and comments — turned into clear next steps.',
    intro: 'A one-page weekly snapshot that turns scattered platform numbers into decisions.',
    images: [
      { src: 'assets/analytics-workspace.webp', alt: 'Social media and website analytics across Instagram, Facebook and Google Analytics' }
    ],
    sections: [
      { title: 'The challenge', text: 'Insights were spread across Instagram, Facebook and website analytics, so it was hard to tell what was working or where to put effort next.' },
      { title: 'What I built', steps: [
        'A weekly template pulling reach, engagement and website activity into one view.',
        'A top-content review showing which posts and formats perform best.',
        'A comments and inquiries check to catch questions that need a reply.',
        'A short “what to do next week” summary with each report.'
      ] },
      { title: 'What it delivers', cards: ['One clear weekly view of performance', 'Evidence for what to post more of', 'Quicker, calmer planning meetings', 'Questions and comments never overlooked'] }
    ],
    tags: ['Meta Business Suite', 'Google Analytics', 'Google Sheets']
  },
  {
    id: 'arcana-proposal', cat: 'docs',
    title: 'Architectural Proposal — Arcana Muskoka',
    blurb: 'A five-page architectural services proposal covering scope, delivery schedule, payment milestones and terms.',
    intro: 'A proposal for Arcana Muskoka (June 2026) that lets a client see the project note, scope of work, schedule and terms at a glance.',
    unit: 'pages',
    note: 'Fees and totals are blurred. Preview only — the original file is not available to download.',
    cover: { src: 'assets/works/proposal-1.webp', alt: 'Proposal cover page', fit: 'cover', pos: 'top center' },
    images: [
      { src: 'assets/works/proposal-1.webp', alt: 'Proposal page 1: cover and project note' },
      { src: 'assets/works/proposal-2.webp', alt: 'Proposal page 2: scope overview, fees blurred' },
      { src: 'assets/works/proposal-3.webp', alt: 'Proposal page 3: scope and totals, fees blurred' },
      { src: 'assets/works/proposal-4.webp', alt: 'Proposal page 4: delivery schedule, payment milestones and terms' },
      { src: 'assets/works/proposal-5.webp', alt: 'Proposal page 5: back cover' }
    ],
    sections: [
      { title: 'What’s inside', list: [
        'Cover page and a note on the vision for the project',
        'Scope overview with work packages from site planning to rendering',
        'Estimated four-phase delivery schedule',
        'Payment milestones, terms and conditions, and an acceptance section'
      ] }
    ],
    tags: ['Proposal', 'Scope of work', 'Delivery schedule', 'Terms']
  },
  {
    id: 'dino-activity-book', cat: 'design',
    title: 'Dinosaur Tracing & Activity Book',
    blurb: 'A children’s dinosaur tracing and activity book — bright cover and a sample inside spread with character cards.',
    intro: 'A tracing and activity book for young children, with a cheerful cover and an inside spread that introduces ten dinosaurs.',
    cover: { src: 'assets/works/dino-1.webp', alt: 'Dinosaur Tracing & Activity Book cover' },
    images: [
      { src: 'assets/works/dino-1.webp', alt: 'Dinosaur Tracing & Activity Book cover' },
      { src: 'assets/works/dino-2.webp', alt: 'Inside spread: Meet the Dinosaurs and Let’s meet them' }
    ],
    sections: [
      { title: 'What’s included', list: [
        'Cover listing tracing, mazes, dot-to-dot, coloring, counting and more',
        'Intro page: “Meet the Dinosaurs!” and “What are dinosaurs?”',
        '“Let’s meet them!” spread with ten colour-coded dinosaur cards',
        'Short, friendly text written for early readers'
      ] }
    ],
    tags: ['Book design', 'Layout', 'Kids’ learning']
  },
  {
    id: 'arcana-furniture-list', cat: 'docs',
    title: 'Furniture & Styling Selections',
    blurb: 'A curated furnishing package for a glamping tent project: buying list, colour palette and design intent.',
    intro: 'A furniture and styling selection for a glamping tent project (June 2026): a clean buying list with supplier, price and product image, plus the palette and mood that guide the choices.',
    unit: 'pages',
    note: 'Preview only — the original file is not available to download.',
    cover: { src: 'assets/works/furniture-1.webp', alt: 'Furniture and styling selections, page 1' },
    images: [
      { src: 'assets/works/furniture-1.webp', alt: 'Furniture buying list page 1: cover, buying list and material palette' },
      { src: 'assets/works/furniture-2.webp', alt: 'Furniture buying list page 2: seating, decking, palette and mood boards' }
    ],
    sections: [
      { title: 'What’s inside', list: [
        'A cover and design intent for the guest experience',
        'A buying list with product, description, supplier, price and image',
        'A warm, natural colour palette inspired by Muskoka',
        'Mood and inspiration boards'
      ] }
    ],
    tags: ['Interior styling', 'Buying list', 'Palette', 'Mood board']
  },
  {
    id: 'event-invitations', cat: 'design',
    title: 'Birthday Invitations',
    blurb: 'Two invitation designs: a floral pastel portrait invite and a playful space-themed landscape card.',
    intro: 'Two birthday invitations for different moods — a floral, pastel portrait invite and a space-themed landscape card with a photo.',
    cover: { src: 'assets/works/invitation-1.webp', alt: 'Space-themed birthday invitation' },
    images: [
      { src: 'assets/works/invitation-1.webp', alt: 'Space-themed first birthday invitation with a photo frame' },
      { src: 'assets/works/invitation-2.webp', alt: 'Floral birthday invitation with cupcakes' }
    ],
    sections: [
      { title: 'What’s included', list: [
        'A landscape invite with space illustrations, a photo frame, date, time and venue',
        'A portrait invite with a floral border, cupcake art, date, venue and dress-code note',
        'Clear hierarchy so the key details read at a glance'
      ] }
    ],
    tags: ['Invitations', 'Layout', 'Event graphics']
  },
  {
    id: 'admin-operations', cat: 'ops',
    title: 'Executive Admin Operations',
    blurb: 'Calendar blocks, an organized inbox, meeting follow-ups and project tracking for a calm, predictable week.',
    intro: 'The behind-the-scenes structure that keeps meetings, messages and follow-ups moving for a busy founder.',
    images: [
      { src: 'assets/admin-support.webp', alt: 'Calendar, inbox, weekly report and task notebook on a desk' }
    ],
    sections: [
      { title: 'The challenge', text: 'Meetings, client emails and project follow-ups competed for attention, making it hard to see what mattered each day.' },
      { title: 'What I built', steps: [
        'A color-coded calendar with focus time, client calls and recurring reviews.',
        'An inbox organized by client and project with labels and follow-up flags.',
        'Daily task lists and a weekly planning routine.',
        'Meeting notes, follow-up emails and a simple tracker for invoices and projects.'
      ] },
      { title: 'What it delivers', cards: ['A calmer, more predictable week', 'Fewer missed follow-ups', 'Meeting prep and notes always ready', 'One place to see what’s next'] }
    ],
    tags: ['Google Calendar', 'Gmail', 'Google Sheets', 'Meeting notes']
  },
  {
    id: 'recruitment-posters', cat: 'design',
    title: 'Recruitment Posters & Banners',
    blurb: 'Hiring graphics for an office-based online English teaching centre: a requirements poster, a call-to-action post and a team banner.',
    intro: 'Recruitment graphics for an office-based online English teaching centre, designed to be clear, friendly and easy to act on.',
    cover: { src: 'assets/works/recruit-1.webp', alt: 'Be an Office Based Online English Teacher post' },
    images: [
      { src: 'assets/works/recruit-1.webp', alt: 'Be an Office Based Online English Teacher — send us a message now' },
      { src: 'assets/works/recruit-2.webp', alt: 'Hiring poster listing requirements for an online English teacher' },
      { src: 'assets/works/recruit-3.webp', alt: 'Be one of us team banner with contact details' }
    ],
    sections: [
      { title: 'What’s included', list: [
        'A requirements poster with a clear checklist and a “Be part of our growing family!” closer',
        'A “Send us a message now!” post with a clear call to action',
        'A “Be one of us!” team banner with contact details and the centre’s mascot logo'
      ] }
    ],
    tags: ['Recruitment', 'Social graphics', 'Banner']
  },
  {
    id: 'jonis-logo', cat: 'design',
    title: 'Jonis Airline Ticketing Logo',
    blurb: 'A logo that combines a location pin and an aircraft in one orange-to-blue mark.',
    intro: 'A logo for Jonis Airline Ticketing: a location pin and an aircraft combined in one mark, in an orange-to-blue gradient.',
    cover: { src: 'assets/works/logo-1.webp', alt: 'Jonis Airline Ticketing logo', fit: 'contain', bg: '#ffffff' },
    images: [
      { src: 'assets/works/logo-1.webp', alt: 'Jonis Airline Ticketing logo: a location pin with an aircraft' }
    ],
    sections: [
      { title: 'The idea', text: 'A map pin says destination and a swooping aircraft says travel. Together they communicate an airline ticketing service in a single, easy-to-recognise symbol.' }
    ],
    tags: ['Logo', 'Branding', 'Travel']
  }
];
/* ----------------------------------------------------------- */

(function () {
  'use strict';

  var root = document.documentElement;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  var pad = function (n) { return (n < 10 ? '0' : '') + n; };
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  var byId = {};
  PROJECTS.forEach(function (p) { byId[p.id] = p; });
  var catName = {};
  CATEGORIES.forEach(function (c) { catName[c.id] = c.label; });

  /* ---------- Config wiring ---------- */
  $$('[data-home-link]').forEach(function (a) { a.href = CONFIG.portfolioUrl + (a.getAttribute('data-hash') || ''); });
  $('#year').textContent = new Date().getFullYear();
  $('#countAll').textContent = PROJECTS.length;
  if (CONFIG.WATERMARK) document.body.classList.add('wm');

  /* ---------- Theme toggle ---------- */
  var toggle = $('#themeToggle');
  function syncToggle() { toggle.setAttribute('aria-label', root.getAttribute('data-theme') === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'); }
  syncToggle();
  toggle.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('luz-theme', next); } catch (e) {}
    syncToggle();
  });

  /* ---------- View-only protection ---------- */
  document.addEventListener('contextmenu', function (e) { if (e.target.closest && e.target.closest('.protected')) e.preventDefault(); });
  document.addEventListener('dragstart', function (e) { if (e.target.tagName === 'IMG') e.preventDefault(); });

  /* ---------- Cards ---------- */
  var grid = $('#grid');
  function cardHTML(p, i) {
    var c = p.cover || p.images[0];
    var n = p.images.length;
    var unit = p.unit || 'images';
    var badge = n + ' ' + (n === 1 ? unit.replace(/s$/, '') : unit);
    var style = '--fit:' + (c.fit || 'cover') + ';--pos:' + (c.pos || 'center') + (c.bg ? ';--cbg:' + c.bg : '');
    var tags = (p.tags || []).slice(0, 4).map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('');
    return '<article class="card rv" id="' + esc(p.id) + '" data-cat="' + esc(p.cat) + '" style="--d:' + ((i % 2) * 0.08) + 's">' +
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
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
    }, { threshold: 0.08 });
    cards.forEach(function (el) { io.observe(el); });
  } else { cards.forEach(function (el) { el.classList.add('is-in'); }); }
  $$('.hero .rv').forEach(function (el) { setTimeout(function () { el.classList.add('is-in'); }, 60); });

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
