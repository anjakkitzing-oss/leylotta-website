/* Selbst gehostete Filme im Goldrahmen: starten stumm beim Hinscrollen, Ton per Knopf */
(function(){
  var DE=(document.documentElement.lang||'').slice(0,2)==='de';
  var L=DE?{play:'Film abspielen',pause:'Film pausieren',on:'Ton an',off:'Ton aus'}:{play:'Play film',pause:'Pause film',on:'Sound on',off:'Sound off'};
  var still=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  [].forEach.call(document.querySelectorAll('.reel-video'),function(v){
    var box=v.closest('.frame-in'),pb=box.querySelector('.reel-play'),sb=box.querySelector('.reel-sound'),lbl=sb.querySelector('.reel-lbl');
    function sync(){box.classList.toggle('playing',!v.paused);pb.setAttribute('aria-label',v.paused?L.play:L.pause);}
    function play(){var p=v.play();if(p&&p.catch)p.catch(function(){});}
    function toggle(){if(v.paused){v._user=false;play();}else{v._user=true;v.pause();}}
    pb.addEventListener('click',toggle);v.addEventListener('click',toggle);
    v.addEventListener('play',sync);v.addEventListener('pause',sync);
    sb.addEventListener('click',function(){v.muted=!v.muted;if(!v.muted&&v.paused){v._user=false;play();}
      sb.setAttribute('aria-pressed',v.muted?'false':'true');lbl.textContent=v.muted?L.on:L.off;});
    if(!still&&'IntersectionObserver' in window){
      new IntersectionObserver(function(es){es.forEach(function(x){
        if(x.isIntersecting&&x.intersectionRatio>=.5){if(v.paused&&!v._user)play();}
        else if(!v.paused){v.pause();}
      });},{threshold:[0,.5]}).observe(v);
    }
  });
})();
