// function play(){
//  const homescreen=document.getElementById('home_screen');
//  homescreen.classList.add('hidden');

//  const playground=document.getElementById('play-ground');
//  playground.classList.remove('hidden');


// }
function continuegame(){
     const alphabet=randomalphabet();

     const currentalphabetelement=document.getElementById('currnet_alphabet');
     currentalphabetelement.innerText=alphabet;

     addbgcolorbyid(alphabet);
}

function play(){
    hideelement('home_screen');
    showelement('play-ground');
    continuegame()

}