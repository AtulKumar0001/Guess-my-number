'use strict';

let guessNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
function displayMessage(message){
  document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function () {
  const num = Number(document.querySelector('.guess').value);
  let number = document.querySelector('.number');
  let scoreSelector = document.querySelector('.score');

  if (!num) {
    displayMessage('!not a number');
  } else {
    if (num == guessNumber) {
      displayMessage('Congratulation you win🎊🎉');
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = score;
      }
      number.textContent = guessNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      number.style.width = '30rem';
    } else  {
      displayMessage(num > guessNumber ? 'Too High!📈' : 'Too Low!📉');
      score--;
      scoreSelector.textContent = score;

      if (score <= 0) {
        displayMessage('!Game Over😐');
        scoreSelector.textContent = 0;
      }
    }

  }
});

document.querySelector('.again').addEventListener('click', function () {
  guessNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  let scoreSelector = document.querySelector('.score');
  let number = document.querySelector('.number');
  let message = document.querySelector('.message');
  document.querySelector('.guess').value = '';
  scoreSelector.textContent = 20;
  number.textContent = '?';
  message.textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  console.log(guessNumber);
  number.style.width = '15rem';
});
