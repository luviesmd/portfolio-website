/* ==========================================================
   About page: experience, skills, tools and education
   ========================================================== */
(function () {
  'use strict';
  var L = window.Luz, $ = L.$, esc = L.esc;
  function list(a) { return a.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join(''); }

  $('#jobs').innerHTML = EXPERIENCE.map(function (j, i) {
    return '<article class="job reveal" style="--d:' + (i * 0.08) + 's"><p class="job__tag">' + esc(j.tag) + '</p><h3>' + esc(j.title) + '</h3><p class="job__org">' + esc(j.org) + '</p><ul class="plan__list">' + list(j.points) + '</ul></article>';
  }).join('');
  $('#skills').innerHTML = list(SKILLS);

  var tg = $('#toolsGrid');
  if (tg && window.TOOLS) {
    tg.innerHTML = TOOLS.map(function (t, i) {
      return '<li class="tool reveal" style="--d:' + ((i % 7) * 0.05) + 's"><span class="tool__tile"><img src="assets/tools/' + esc(t.icon) + '" alt="" loading="lazy" draggable="false"></span><span class="tool__name">' + esc(t.name) + '</span></li>';
    }).join('');
  }

  $('#edu').innerHTML = EDUCATION.map(function (e, i) {
    return '<article class="edu__item reveal" style="--d:' + (i * 0.08) + 's">' + (e.years ? '<p class="edu__years">' + esc(e.years) + '</p>' : '') + '<h3>' + esc(e.title) + '</h3><p>' + esc(e.school) + '</p></article>';
  }).join('');

  L.reveal(L.$$('.job, .tool, .edu__item'));
})();
