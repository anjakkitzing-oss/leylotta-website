/* Klick zum Laden: YouTube-Player erst nach Klick, über youtube-nocookie.com */
(function(){
  /* YouTube verlangt die Herkunftsseite (sonst Fehler 153). Bei lokal geöffneten Dateien (file://)
     gibt es keine, dann öffnet der Link YouTube wie früher in einem neuen Tab. */
  if(!/^https?:$/.test(location.protocol))return;
  var DE=(document.documentElement.lang||'').slice(0,2)==='de';
  var origin=encodeURIComponent(location.origin);
  [].forEach.call(document.querySelectorAll('a[href*="youtube.com/watch?v="],a[href*="vimeo.com/"]'),function(a){
    var vim=/vimeo\.com\/(\d+)/.exec(a.href);
    var m=vim||a.href.match(/[?&]v=([\w-]{11})/);if(!m||!a.querySelector('.play'))return;
    var id=m[1],host=vim?'Vimeo':'YouTube';a.setAttribute('role','button');
    a.setAttribute('aria-label',(a.querySelector('.cap')||{}).textContent+(DE?' — Video abspielen (wird von '+host+' geladen)':' — play video (loads from '+host+')'));
    a.addEventListener('click',function(ev){
      ev.preventDefault();
      var box=a.parentNode,frame=box.closest('.frame'),title=(a.querySelector('.cap')||{}).textContent||'Video';
      var f=document.createElement('iframe');
      f.src=vim?('https://player.vimeo.com/video/'+id+'?autoplay=1&dnt=1&playsinline=1')
               :('https://www.youtube-nocookie.com/embed/'+id+'?autoplay=1&rel=0&playsinline=1&origin='+origin+'&widget_referrer='+encodeURIComponent(location.href));
      f.title=title;f.allow='autoplay; encrypted-media; picture-in-picture; fullscreen';f.allowFullscreen=true;
      f.referrerPolicy='strict-origin-when-cross-origin';f.className='yt-frame';
      if(frame)frame.classList.add('yt-on');
      box.replaceChild(f,a);f.focus();
    });
  });
})();
