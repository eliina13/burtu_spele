const msg = document.querySelector ('.msg');
const guess = document.querySelector ('input');
const btn = document.querySelector ('.btn');
let play = false;
let sWord= ['skola', 'pavasaris', 'ritenis', 'māja', 'vizbulītes', 'nakts', 'mēness'];
let newWords = "";
let randWords = "";

const creatNewWords = () => {
  let ranNum = Math.floor(Math.random() * sWord.length);
  let newTempSwords= sWord [ranNum];
  console.log(newTempSwords.split(""));
  return newTempSwords;
}

//const scrambleWords = (arr)=> {}
  

btn.addEventListener ('click', function () {
  if (!play){
    play = true;
    btn.innerHTML = "Guess";
    guess.classList.toggle ('hidden');
    newWords = creatNewWords ();
   // randWords = scrambleWords( newWords)
  }
})