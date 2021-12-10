document.addEventListener('DOMContentLoaded', () => {
  
    
      const __ms = document.querySelector('.micro-slider');
    const __msSlider = new MicroSlider(__ms, { indicators: false, indicatorText: '' });
    const __hammer = new Hammer(__ms);
      let __msTimer = 1500;                                                                 //속도
      let __msAutoplay;
      
    
      __msAutoplay = setInterval(() => __msSlider.next(), __msTimer);
    
      __ms.onmouseenter = function(e) {
      clearInterval(__msAutoplay); 
      console.log(e.type + ' mouse detected');
    }
    
      __ms.onmouseleave = function(e) {
      __msAutoplay = setInterval(() => __msSlider.next(), __msTimer);
      console.log(e.type + ' mouse detected');
    }
    
    hammer.on('tap', function(e) {
      clearInterval(__msAutoplay);
      console.log(e.type + ' gesture detected');
    });
    
    hammer.on('swipe', function(e) {
      __msAutoplay = setInterval(() => __msSlider.next(), __msTimer);
      console.log(e.type + ' gesture detected');
    });
    
  });