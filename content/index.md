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

  // Canonical site base used in sitemap URLs (must match quartz.config.yaml baseUrl)
  var siteBase = 'https://kbpro8.github.io/acehwiki/';

  function isArticle(slug) {
    if (!slug || slug === 'index') return false;
    if (slug.startsWith('tags/') || slug === 'tags') return false;
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

  // Fetch contentIndex.json + sitemap.xml in parallel
  Promise.all([
    fetch(base + 'static/contentIndex.json').then(function (r) { return r.json(); }),
    fetch(base + 'sitemap.xml').then(function (r) { return r.text(); })
  ]).then(function (results) {
    var idx = results[0];
    var sitemapText = results[1];

    // --- Random articles (from contentIndex.json) ---
    var entries = Object.entries(idx).filter(function (e) { return isArticle(e[0]); });
    for (var i = entries.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = entries[i]; entries[i] = entries[j]; entries[j] = tmp;
    }
    renderList('home-random-list', entries.slice(0, 2).map(function (e) {
      return { href: base + e[0], title: e[1].title || e[0] };
    }));

    // --- Latest articles (from sitemap.xml — has real git lastmod dates) ---
    var doc = new DOMParser().parseFromString(sitemapText, 'text/xml');
    var latest = Array.from(doc.querySelectorAll('url'))
      .map(function (urlEl) {
        var loc = (urlEl.querySelector('loc') || {}).textContent || '';
        var lastmod = (urlEl.querySelector('lastmod') || {}).textContent || '';
        var rawSlug = loc.startsWith(siteBase) ? loc.slice(siteBase.length) : null;
        // Folder root pages have a trailing slash — skip them
        if (!rawSlug || rawSlug.endsWith('/')) return null;
        var slug = decodeURIComponent(rawSlug);
        return { slug: slug, lastmod: lastmod };
      })
      .filter(function (u) { return u && u.slug && isArticle(u.slug) && u.lastmod; })
      .sort(function (a, b) { return b.lastmod.localeCompare(a.lastmod); })
      .slice(0, 2);

    renderList('home-latest-list', latest.map(function (u) {
      var info = idx[u.slug] || {};
      return { href: base + u.slug, title: info.title || u.slug };
    }));
  }).catch(function (err) {
    console.warn('AcehWiki featured articles error:', err);
  });
})();
</script>
