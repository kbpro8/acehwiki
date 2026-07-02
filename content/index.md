---
title: Encyclopedia of Aceh History
---

Welcome to **Aceh Wiki History** — a comprehensive encyclopedia of Acehnese history.

Explore history by:
- [[Kronologi Sejarah Aceh|Timeline]]
- [[Tokoh-Tokoh Aceh|Notable Figures]]
- [[Peristiwa Bersejarah|Events]]
- [[Tempat Bersejarah|Places]]

## Featured Articles

<div class="home-featured">
  <div class="home-featured-section">
    <h3>Latest Articles</h3>
    <ul class="home-featured-list" id="home-latest-list">
      <li class="home-featured-loading">Loading&#8230;</li>
    </ul>
  </div>
  <div class="home-featured-section">
    <h3>Random Articles</h3>
    <ul class="home-featured-list" id="home-random-list">
      <li class="home-featured-loading">Loading&#8230;</li>
    </ul>
  </div>
</div>

<style>
.home-featured {
  display: flex;
  gap: 2rem;
  margin: 1.5rem 0;
  flex-wrap: wrap;
}
.home-featured-section {
  flex: 1;
  min-width: 200px;
}
.home-featured-section h3 {
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
  color: var(--secondary);
}
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
    if (/^(years\/\d{4}|\d{4})$/.test(slug)) return false;
    if (slug.endsWith('/index')) return false;
    return true;
  }

  function renderList(id, items) {
    var el = document.getElementById(id);
    if (!el) return;
    if (!items || items.length === 0) {
      el.innerHTML = '<li class="home-featured-loading">No articles found.</li>';
      return;
    }
    el.innerHTML = items.map(function (item) {
      return '<li><a class="internal" href="' + item.href + '">' + item.title + '</a></li>';
    }).join('');
  }

  // Random articles from contentIndex.json
  fetch(base + 'static/contentIndex.json')
    .then(function (r) { return r.json(); })
    .then(function (idx) {
      var entries = Object.entries(idx).filter(function (e) { return isArticle(e[0]); });
      for (var i = entries.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = entries[i]; entries[i] = entries[j]; entries[j] = tmp;
      }
      renderList('home-random-list', entries.slice(0, 2).map(function (e) {
        return { href: base + e[0], title: e[1].title || e[0] };
      }));
    })
    .catch(function (err) { console.warn('AcehWiki: random articles failed', err); });

  // Latest articles from RSS feed
  fetch(base + 'index.xml')
    .then(function (r) { return r.text(); })
    .then(function (text) {
      var doc = new DOMParser().parseFromString(text, 'text/xml');
      var items = Array.from(doc.querySelectorAll('item')).slice(0, 2);
      renderList('home-latest-list', items.map(function (item) {
        var titleEl = item.querySelector('title');
        var linkEl = item.getElementsByTagName('link')[0];
        return {
          href: linkEl ? (linkEl.textContent || '') : '',
          title: titleEl ? (titleEl.textContent || '') : ''
        };
      }));
    })
    .catch(function (err) { console.warn('AcehWiki: latest articles failed', err); });
})();
</script>
