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
 
 
 
 /* START Portionen berechnen für rezept-des-tages.html */

let croissant = [
    {
      "mehl": 500,
      "zucker": 50,
      "hefe": 25,
      "salz": 1,
      "wasser": 310
    }
  ];
  
  function calculateCroissant() {
    let mehl = croissant[0].mehl;
    let zucker = croissant[0].zucker;
    let hefe = croissant[0].hefe;
    let salz = croissant[0].salz;
    let wasser = croissant[0].wasser;
    let portions = +document.getElementById('number-portions').value;
  
    if(document.getElementById('number-portions').value != ''){
      document.getElementById('mehl').innerHTML= portions*mehl;
      document.getElementById('zucker').innerHTML= portions*zucker;
      document.getElementById('hefe').innerHTML= portions*hefe;
      document.getElementById('salz').innerHTML= portions*salz;
      document.getElementById('wasser').innerHTML= portions*wasser;
    }
   
  }
  
  /* END Portionen berechnen für rezept-des-tages.html*/