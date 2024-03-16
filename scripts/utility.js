function hideelement(elementid){
    const element= document.getElementById(elementid);
    element.classList.add('hidden');


}

function showelement(elementid){
    const element=document.getElementById(elementid);
    element.classList.remove('hidden');
}

function addbgcolorbyid(elementid){
    const element=document.getElementById(elementid);
    element.classList.add('bg-orange-400');
}

function removebgcolorbtid(elementid){
    const element=document.getElementById(elementid);
    element.classList.remove('bg-orange-400');
}

function randomalphabet(){
    const alphabetstring='abcdefghijklmnopqrstuvwxyz';
    const alphabets=alphabetstring.split('');
    // console.log(alphabets);
    const randomNumber =Math.random()*25;
     const index=Math.round(randomNumber);
    //  console.log(index);

     const alphabet=alphabets[index];
    //  console.log(index,alphabet);
     return alphabet;


}