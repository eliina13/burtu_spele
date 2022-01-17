const timeH = document.querySelector ('h4');
let timeSecond = 5;

timeH.innerHTML = `00:${timeSecond}`;


const countDown = setInterval (()=>{
  timeSecond--;
  displayTime (timeSecond);
  if (timeSecond <= 0 || timeSecond < 1) {
    endTime();
    clearInterval(countDown);
  }
}, 1000)

function displayTime (second) {
  const min = Math.floor ( second/60);
  const sec =  Math.floor ( second % 60);
  timeH.innerHTML = `${min}:${sec}`
}

function endTime ( ) {
  timeH.innerHTML = 'Laiks beidzies!';  
}

// laika kontrole



