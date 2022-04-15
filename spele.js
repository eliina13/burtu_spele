const API ="https://burtusp.eliina13.repl.co"
const msg = document.querySelector ('.msg');
const guess = document.querySelector ('input');
const btn = document.querySelector ('.btn');
const reg = document.querySelector ('reg');
let play = false;
let sWord= ['skola', 'pavasaris', 'ritenis', 'suns', 'diennakts', 'nakts', 'gadalaiks'];
let newWords = "";
let randWords = "";
let vards = document.querySelector ('.vards');
let rezultati = document.querySelector ('.rezultats');

const creatNewWords = () => {
  let ranNum = Math.floor(Math.random() * sWord.length);
  let newTempSwords= sWord [ranNum];
  //console.log(newTempSwords.split(""));
  return newTempSwords;
}


const scrambleWords = (arr)=> {
  for (let i = arr.length-1; i>0; i--){
    let temp = arr[i];
   // console.log(temp);
    let j = Math.floor(Math.random()*(i+1));
   // console.log(i);
   // console.log(j);

    arr[i] = arr [j];
    arr[j] = temp;

    return arr;
  }
}
btn.addEventListener ('click', function () {
  if (!play){
    play = true;
    btn.innerHTML = "Iesniegts";
    guess.classList.toggle ('hidden');
    newWords = creatNewWords ();
   randWords = scrambleWords( newWords.split("")).join("");
  // console.log(randWords.join(""));
  msg.innerHTML= randWords;
  } 
  else{
    let tempWord = guess.value;
    if(tempWord === newWords) {
     // console.log('pareizi');
     play = false;
     msg.innerHTML = `Pareizi!`;
     btn.innerHTML = "Turpināt!";
     score= score + 10;
     scoreDisplay.innerHTML= score;
    guess.classList.toggle ('hidden');
     guess.value ="";
    }
    
    else {
      console.log('Nepareizi');
      msg.innerHTML = `Nepareizi! Spēle beigusies!`;
      btn.innerHTML = "Sākt no jauna!";
    
    }
  }
})

const scoreDisplay = document.querySelector ('.score');
const timeDisplay = document.querySelector ('.time');


//laiks
setInterval (countDown , 1000 );
setInterval (checkStatus , 50)

let time = 10;
let score = 0;

function countDown () {
  if ( play == true && time > 0) {
    time -- ; 
  } 
  
else {
  play = false;
}
    timeDisplay.innerHTML = time;
    
   
}

//Parbauda statusu
function checkStatus () {
  if ( !play && time == 0)
   {msg.innerHTML = 'Spēle beigusies!'
  
   btn.innerHTML = "Sākt no jauna!";
   guess.classList= "hidden";  
}}


//rezultātu reģistrācija
function registretRezultatu(){
console.log ('registretRezultatu () darbojas');

rezultati.innerHTML = rezultati.innerHTML  + '<br/>'+ vards.value +':'+score+'<br />';

fetch(API +'/sutit/'+vards.value +'/' + score)
}

//async function ieladeRezultatu()
//{
 // let datiNoServera = await fetch(API + '/lasit');
 // let dati = await datiNoServera.text();
 // rezultati.innerHTML = dati;
//}


//setInterval (ieladeRezultatu, 1000)
async function ieladeRezultatuJson()
{
  let datiNoServera = await fetch(API + '/lasit');
  let dati = await datiNoServera.json();

 i = 0;
 while ( i < await dati.length )
    {
       console.log(i);
       rezultati.innerHTML = rezultati.innerHTML+dati[i]['vards']+': '+dati[i][score]+'<br />';

        i = i+1;
    }

    rezultati.scrollTop = rezultati.scrollHeight;
}//beidzas ieladeRezultatuJson()

//setInterval(ieladeRezultatuJson,10000)

//function test (){
  
  //{console.log(answe)}}

 //else if  
//document.querySelector ('rezultats')
//var atbilde = prompt ("Lai reģistrētu rezultātu, ievadi savu vārdu!");
