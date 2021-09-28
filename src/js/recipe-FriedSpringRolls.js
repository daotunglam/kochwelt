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



/**
 * Portionen berechnen für recipe-FriedSpringRolls.html
 */ 
let ingredient = [
    {
        "reispapier": 20,
        "zucker": 1, 
        "glasnudeln": 80,
        "garnelen": 200,
        "schweinehack": 250,
        "ei": 1,
        "fischsauce": 1.5,
        "pfeffer": 1,
        "meersalz": 1, 
        "essig": 2,
        "limettensaft": 2,
        "chilischote": 1,
        "knoblauchzehen": 2
    }
];

function calculatePortion() {
    let reispapier = ingredient[0].reispapier;
    let zucker = ingredient[0].zucker;
    let glasnudeln = ingredient[0].glasnudeln;
    let garnelen = ingredient[0].garnelen;
    let schweinehack = ingredient[0].schweinehack;
    let ei = ingredient[0].ei;
    let fischsauce = ingredient[0].fischsauce;
    let pfeffer = ingredient[0].pfeffer;
    let meersalz = ingredient[0].meersalz;
    let essig = ingredient[0].essig;
    let limettensaft = ingredient[0].limettensaft;
    let chilischote = ingredient[0].chilischote;
    let knoblauchzehen = ingredient[0].knoblauchzehen;
    let portions = +document.getElementById('number-portions').value;

    if (document.getElementById('number-portions').value != '') {
        document.getElementById('reispapier').innerHTML = portions * reispapier;
        document.getElementById('zucker').innerHTML = portions * zucker;
        document.getElementById('glasnudeln').innerHTML = portions * glasnudeln;
        document.getElementById('garnelen').innerHTML = portions * garnelen;
        document.getElementById('schweinehack').innerHTML = portions * schweinehack;
        document.getElementById('ei').innerHTML = portions * ei;
        document.getElementById('fischsauce').innerHTML = portions * fischsauce;
        document.getElementById('pfeffer').innerHTML = portions * pfeffer;
        document.getElementById('meersalz').innerHTML = portions * meersalz;
        document.getElementById('essig').innerHTML = portions * essig;
        document.getElementById('limettensaft').innerHTML = portions * limettensaft;
        document.getElementById('chilischote').innerHTML = portions * chilischote;
        document.getElementById('knoblauchzehen').innerHTML = portion * knoblauchzehen;
    }
}