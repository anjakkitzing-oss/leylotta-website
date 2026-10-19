/* Herkunft von Google-Ads-Klicks ohne Cookies: liest Parameter aus der Adresse
   und gibt sie ans Anfrageformular weiter. Es wird nichts gespeichert. */
(function () {
  var p = new URLSearchParams(location.search);
  if (p.get('src') !== 'gads') return;
  var kampagnen = { '24367951634': 'Weihnachten 2026', '24362910684': 'Silvester & Neujahr' };
  var typen = { p: 'passende Wortgruppe', e: 'genau passend', b: 'weitgehend passend' };
  var felder = {
    'Herkunft': 'Google Ads',
    'Google Ads Kampagne': kampagnen[p.get('cmp')] || p.get('cmp') || '',
    'Google Ads Suchbegriff': p.get('kw') || '',
    'Google Ads Keyword-Option': typen[p.get('mt')] || p.get('mt') || ''
  };
  var keep = ['src', 'cmp', 'kw', 'mt'];
  var qs = keep.filter(function (k) { return p.get(k); })
    .map(function (k) { return k + '=' + encodeURIComponent(p.get(k)); }).join('&');
  function fill() {
    document.querySelectorAll('form').forEach(function (f) {
      Object.keys(felder).forEach(function (name) {
        if (!felder[name]) return;
        var i = f.querySelector('input[name="' + name + '"]');
        if (!i) { i = document.createElement('input'); i.type = 'hidden'; i.name = name; f.appendChild(i); }
        i.value = felder[name];
      });
    });
    document.querySelectorAll('a[href^="contact-de.html"], a[href^="contact.html"]').forEach(function (a) {
      var h = a.getAttribute('href');
      if (h.indexOf('src=gads') > -1) return;
      var parts = h.split('#');
      a.setAttribute('href', parts[0] + (parts[0].indexOf('?') > -1 ? '&' : '?') + qs + (parts[1] ? '#' + parts[1] : ''));
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fill); else fill();
})();
