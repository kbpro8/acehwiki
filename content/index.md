---
title: Encyclopedia of Aceh History
---

Welcome to **Aceh Wiki History** — a comprehensive encyclopedia of Acehnese history.

Explore history by:
- [[Kronologi Sejarah Aceh|Timeline]]
- [[Tokoh-Tokoh Aceh|Notable Figures]]
- [[Peristiwa Bersejarah|Events]]
- [[Tempat Bersejarah|Places]]

## Random Articles

<ul class="home-featured-list" id="home-random-list">
  <li class="home-featured-loading">Loading&#8230;</li>
</ul>

<style>
.home-featured-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.home-featured-list li {
  padding: 0.3rem 0;
  border-bottom: 1px solid var(--lightgray);
}
.home-featured-list li:last-child {
  border-bottom: none;
}
.home-featured-loading {
  color: var(--gray);
  font-style: italic;
}
</style>

<script>
(function () {
  var base = window.location.pathname;
  if (!base.endsWith('/')) {
    base = base.substring(0, base.lastIndexOf('/') + 1);
  }

  function isArticle(slug) {
    if (!slug || slug === 'index') return false;
    if (slug.startsWith('tags/') || slug === 'tags') return false;
    if (slug.endsWith('/index')) return false;
    return true;
  }

  var indexPromise = (typeof fetchData !== 'undefined')
    ? fetchData
    : fetch(base + 'static/contentIndex.json').then(function (r) { return r.json(); });

  indexPromise.then(function (idx) {
    var el = document.getElementById('home-random-list');
    if (!el) return;
    var entries = Object.entries(idx).filter(function (e) { return isArticle(e[0]); });
    for (var i = entries.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = entries[i]; entries[i] = entries[j]; entries[j] = tmp;
    }
    var items = entries.slice(0, 5);
    if (!items.length) {
      el.innerHTML = '<li class="home-featured-loading">No articles found.</li>';
      return;
    }
    el.innerHTML = items.map(function (e) {
      return '<li><a class="internal" href="' + base + e[0] + '">' + (e[1].title || e[0]) + '</a></li>';
    }).join('');
  }).catch(function (err) {
    console.warn('AcehWiki random articles error:', err);
  });
})();
</script>
