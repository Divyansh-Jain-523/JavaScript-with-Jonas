const msgDisplay = document.querySelector(".message");
const scoreDisplay = document.querySelector(".score");
const guessValue = document.querySelector(".guess");
const highScoreDisplay = document.querySelector(".highscore");
const btnCheck = document.querySelector(".check");
let randomNum = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
let userInp;

const highScoreUpdater = () => {
  highScoreDisplay.textContent = Math.max(highScore, score);
};
const scoreDecrement = () => {
  scoreDisplay.textContent = --score;
};
const winnerFunction = () => {
    msgDisplay.textContent = "Yay! 🎉 You are Right 🎉";
    document.querySelector("body").style.backgroundColor = "#60b347";
    btnCheck.textContent = "Again!";
    btnCheck.addEventListener('click',checkBtn);
    document.querySelector(".number").style.width = "30rem";
    highScoreUpdater();
}
const lostFunction = () =>{
  document.querySelector('body').style.backgroundColor = '#CC0000';
  btnCheck.textContent = 'Again!';
  msgDisplay.textContent = 'You Lost! 😞'
}
const checkBtn = () => {
  if (btnCheck.textContent === "Again!") {
    againBtn();
  } 
  else if(score === 0){
    document.querySelector(".number").textContent = randomNum;
    lostFunction();
  }
  else {
    userInp = Number(guessValue.value);
    if (userInp && score > 0) {
      if (userInp === randomNum) {
        winnerFunction();
      } else if (userInp > randomNum && userInp <= 20) {
        msgDisplay.textContent = "Guess a smaller Number";
        scoreDecrement();
      } else if (userInp < randomNum && userInp > 0) {
        msgDisplay.textContent = "Guess a bigger Number";
        scoreDecrement();
      } else msgDisplay.textContent = "Error! Range lies from 1 to 20";
    }
    else {
      msgDisplay.textContent = "Enter a Number greater than 0";
    }
  }
};
const againBtn = () => {
  score = 20;
  msgDisplay.textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  scoreDisplay.textContent = score;
  document.querySelector(".number").textContent = '?';
  btnCheck.textContent = "Check!";
  randomNum = Math.trunc(Math.random() * 20 + 1);
  guessValue.value = "";
};

btnCheck.addEventListener("click", checkBtn);
document.querySelector(".again").addEventListener("click", againBtn);
