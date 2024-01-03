'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 69;
document.querySelector('.guess').value = 96;
console.log(document.querySelector('.guess').value);*/

let currentScore = Number(document.querySelector('.score').innerText);
let highScore = Number(document.querySelector('.highscore').innerText);
let searchNumber = Math.floor(Math.random() * 20) + 1;
console.log(searchNumber);

const displayMessage = function (classMessage, message) {
  document.querySelector('.' + classMessage).textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess || guess < 1 || guess > 20) {
    console.warn('Input correct number');
    displayMessage('message', 'Input correct number!');
  } else {
    if (guess === searchNumber) {
      document.body.style.backgroundColor = '#60b347';
      if (currentScore > highScore) {
        highScore = currentScore;
      }
      displayMessage('number', searchNumber);
      displayMessage('message', '🎉 Congratulations!');
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.highscore').innerText = highScore.toString();
    } else {
      if (guess > searchNumber) {
        displayMessage('message', 'Too high...');
      } else {
        displayMessage('message', 'Too low...');
      }
      currentScore--;
      document.querySelector('.score').innerText = currentScore.toString();
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  document.body.style.backgroundColor = '#222';
  displayMessage('number', '?');
  displayMessage('message', 'Start guessing...');
  document.querySelector('.number').style.width = '15rem';
  console.log('Restart the game');
  document.querySelector('.guess').value = '';
  currentScore = 20;
  searchNumber = Math.floor(Math.random() * 20) + 1;
  console.log(searchNumber);
  document.querySelector('.score').innerText = '0';
});
