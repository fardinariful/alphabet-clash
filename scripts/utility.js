function hideelement(elementid){
    const element= document.getElementById(elementid);
    element.classList.add('hidden');

}

function showelement(elementid){
    const element=document.getElementById(elementid);
    element.classList.remove('hidden');
}

function randomalphabet(){
    const alphabetstring='abcdefghijklmnopqrstuvwxyz';
    const alphabets=alphabetstring.split('');
    // console.log(alphabets);
    const randomNumber =Math.random()*25;
     const index=Math.round(randomNumber);
     console.log(index);

     const alphabet=alphabets[index];
     console.log(index,alphabet);
     return alphabet;


}