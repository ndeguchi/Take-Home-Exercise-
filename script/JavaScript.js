
/*nav dropdowwn*/
const menu = document.getElementById('menu');


/* play/pause button */
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const playingText = document.getElementById('playingText');
const playingTextP = document.getElementById('playingTextP');
const nowPlaying = document.getElementById('nowPlaying');
const playNumber = document.getElementById('playNumber');


const hidden = 'hidden';
const display = 'display';
const color = 'color';
const color2 = 'color2';

/* nav dropdown function */

function dropdown(){

  if(menu.classList.contains('hidden')){
      menu.classList.add(display);
      menu.classList.remove(hidden);
  }else{
    menu.classList.add(hidden);
    menu.classList.remove(display);
  }
}

   
/* changing button (play <-> pause) and changing title color (white <-> green) */

function changeBtn() {
     
     if (play.classList.contains('hidden')) {
       
       play.classList.add(display);
       play.classList.remove(hidden);

       playingText.classList.add(color);
       playingTextP.classList.add(color2);
       nowPlaying.classList.add(display);

       playNumber.classList.add(hidden);
       playNumber.classList.remove(display);
       
       // hiding
       pause.classList.add(hidden);
       pause.classList.remove(display);
     } else {
       
       pause.classList.add(display);
       pause.classList.remove(hidden);

       playNumber.classList.add(display);
       playNumber.classList.remove(hidden);
      
       // hiding
       play.classList.add(hidden);
       play.classList.remove(display);
       
       playingText.classList.remove(color);
       nowPlaying.classList.remove(display);
     }
   }