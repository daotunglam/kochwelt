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



/* START Portionen berechnen für recipe-StickiestRips.html */

let ingredient = [
    {
        "schweinerippchen": 1.2,
        "gochujang": 2,
        "brauner_zucker": 1/3,
        "sojasauce": 2,
        "sesam": 0.5,
        "salz": 1,
        "beer": 1,
        "apfelessig": 1,
    }
];

function calculatePortion() {
    let schweinerippchen = ingredient[0].schweinerippchen;
    let gochujang = ingredient[0].gochujang;
    let brauner_zucker = ingredient[0].brauner_zucker;
    let sojasauce = ingredient[0].sojasauce;
    let salz = ingredient[0].salz;
    let beer = ingredient[0].beer;
    let apfelessig = ingredient[0].apfelessig;
    let portions = +document.getElementById('number-portions').value;

    if (document.getElementById('number-portions').value != '') {
        document.getElementById('schweinerippchen').innerHTML = portions * schweinerippchen;
        document.getElementById('gochujang').innerHTML = portions * gochujang;
        document.getElementById('brauner_zucker').innerHTML = portions * brauner_zucker;
        document.getElementById('sojasauce').innerHTML = portions * sojasauce;
        document.getElementById('salz').innerHTML = portions * salz;
        document.getElementById('beer').innerHTML = portions * beer;
        document.getElementById('apfelessig').innerHTML = portions * apfelessig;
    }

}

/* END Portionen berechnen für recipe-StickiestRips.html */