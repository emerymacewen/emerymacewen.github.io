/*  *** Hints ***
---Consider the steps required...
---Start by getting inputed value (guess) 
---Generate random number (try output to console to see value)
---Compare these 2 values
---Add event listener for click-event on button
---Update message and scores etc
*/

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
  
  let randNum = getRandomIntInclusive(1, 20); //start w Rand #
  console.log(randNum);
  let messageObj = document.querySelector(".message");
  
  let score = 20; // GLOBAL variable (accessible by all functions)
  let highscore = 0
  let scoreObj = document.querySelector(".score");
  
  let unknownNumber = document.querySelector(".number")

  let guessNum = document.querySelector(".guess")

  function check() {
    let guess = Number(document.querySelector(".guess").value);
    if (guess === randNum) {
      //alert('win')
      messageObj.textContent = "You win!";
      document.body.style.backgroundColor = "green";
      document.querySelector(".number").textContent = randNum;
      if(score > highscore) {
          highscore = score;
          document.querySelector('.highscore').textContent = highscore
      }
    } else if (guess < randNum) {
      //alert('too low')
      messageObj.textContent = "Too low. Guess Again";
      score -= 1;
      scoreObj.textContent = score;
    } else if (guess > randNum) {
      //alert('too high')
      messageObj.textContent = "Too high. Guess Again";
      score -= 1;
      scoreObj.textContent = score;
    }
    if (highscore === 20) {
        alert("Showoff")
    }
  }
  
function again() {
  randNum = getRandomIntInclusive(1, 20)
  console.log(randNum);
  document.body.style.backgroundColor = "#222";
  unknownNumber.textContent = "?"
  score = 20
  scoreObj.textContent = score
  messageObj.textContent = "Start Guessing"
  document.querySelector(".guess").value = ""
}


function numberLimits() {

  if (guessNum.value > 20) {
  guessNum.value = 20
  }
  if (guessNum.value < 0) {
  guessNum.value = 0
  }
}