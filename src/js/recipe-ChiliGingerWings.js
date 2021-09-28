
/**
 * INTRO
 */
 window.addEventListener('scroll', hideVideo);
 function hideVideo() {
     if(document.body.scrollTop>0 || document.documentElement.scrollTop>0){
         document.getElementById('intro_video').classList.add('hide_video');
     }else{
         document.getElementById('intro_video').className='';
     }
 }
 
 
 
 /* START Portionen berechnen für recipe-ChiliGingerWings.html */

let ingredient = [
    {
      "wing": 1,
      "backpulver": 1,
      "meersalz": 1,
      "flasche_ticky_chilli_ginger": 0.5,
      "sesam": 0.5,
      "fruehlingszwiebeln": 1,
    }
  ];
  
  function calculatePortion() {
    let wing = ingredient[0].wing;
    let backpulver = ingredient[0].backpulver;
    let meersalz = ingredient[0].meersalz;
    let flasche_ticky_chilli_ginger = ingredient[0].flasche_ticky_chilli_ginger;
    let sesam = ingredient[0].sesam;
    let fruehlingszwiebeln = ingredient[0].fruehlingszwiebeln;
    let portions = +document.getElementById('number-portions').value;
  
    if(document.getElementById('number-portions').value != ''){
      document.getElementById('wing').innerHTML= portions*wing;
      document.getElementById('backpulver').innerHTML= portions*backpulver;
      document.getElementById('meersalz').innerHTML= portions*meersalz;
      document.getElementById('flasche_ticky_chilli_ginger').innerHTML= portions*flasche_ticky_chilli_ginger;
      document.getElementById('sesam').innerHTML= portions*sesam;
      document.getElementById('fruehlingszwiebeln').innerHTML= portions*fruehlingszwiebeln;
    }
   
  }
  
  /* END Portionen berechnen für recipe-ChiliGingerWings.html */
  