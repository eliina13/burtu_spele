const msg = document.querySelector ('.msg');
const guess = document.querySelector ('input');
const btn = document.querySelector ('.btn');
let play = false;
let sWord= ['skola', 'pavasaris', 'ritenis', 'suns', 'diennakts', 'nakts', 'gadalaiks'];
let newWords = "";
let randWords = "";

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
    guess.classList.toggle ('hidden');
     guess.value ="";
        score++;
    }else {
      console.log('Nepareizi');
      msg.innerHTML = `Nepareizi! Spēle beigusies!`;
      btn.innerHTML = "Sākt no jauna!"
      

    }
  }
})



let time = 10;
let score = 0;

const scoreDisplay = document.querySelector ('.score');
const timeDisplay = document.querySelector ('.time');


//laiks
setInterval (countDown , 1000 );
//setInterval (checkStatus , 50)

function countDown () {
  if ( time > 0 ) {
    time -- ; 
  } else if ( time === 0 ) {
      play = false;
    }
    timeDisplay.innerHTML = time;
   
}


  

//Parbauda statusu
function checkStatus () {
  if (!play && time === 0) {message.innerHTML = 'Spēle beigusies!'}
score = 0;}

///document.querySelector ('rezultats')
//var atbilde = prompt ("Lai reģistrētu rezultātu, ievadi savu vārdu!");


