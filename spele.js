window.addEventListener ('load', init);

let time = 60;
let score = 0;
let isPlaying;

const wordInput = document.querySelector ('wordInput');
const currentWord = document.querySelector ('currentWord');
const scoreDisplay = document.querySelector ('score');
const timeDisplay = document.querySelector ('time');
const message = document.querySelector ('message');
const seconds = document.querySelector ('seconds');

const words = [ 'skola', 'laiks', 'mamma'];

//Speles veidošana
function init () {
  //ielādē vārdus no apgabala
  showWord (words);
  wordInput.addEventListener ('input', startMatch)

  function startMatch (){
    if (matchWords ()) {
      isPlaying =true;
      time = 60;
      showWord (words);
      wordInput.value= '';
      score ++;
  }
  if(score === -1) {
    scoreDisplay.innerHTML = 0;
  }
  else{ 
    scoreDisplay.innerHTML = score;
  }
  scoreDisplay.innerHTML = score;
}

function matchWords ( ) {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Pareizi';
      return true;}
  else {
    message,innerHTML = '';
    return false;
  }
}
const randIndex = Math.floor (Math.random()* words.length);

// Izvade random vārdiem

currentWord.innerHTML = words [randIndex];


//laiks
setInterval (countDown, 1000);
setInterval (checkStatus, 50)
function countDown () {
  if (time >0) {
    time--;}
    else if (time === 0) {
      isPlaying =false;
    }
    timeDisplay.innerHTML = time;
}
//Parbauda statusu
function checkStatus () {
  if (!isPlaying && time === 0) {message.innerHTML = 'Spēle beigusies!'}
score = 0;}