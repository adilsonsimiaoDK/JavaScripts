'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 20;
// document.querySelector('.score').textContent = 10;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let highScore = 0;
console.log(secretNumber);
let score = 20;

const displayMessage = function (message) {
  return (document.querySelector('.message').textContent = message);
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage(' No Number!');
  } else if (guess === secretNumber) {
    displayMessage(' Correct Number You Win!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
      score = 20;
    }

    //When the number is too High
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber
          ? displayMessage(' Too High!')
          : displayMessage('Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
      //When you lost of the game
    } else {
      displayMessage('You lost the game!');
    }
  }
});
//  else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = ' Too High!';
//       score--;
//       document.querySelector('.score').textContent = score;
//       //When you lost of the game
//     } else {
//       document.querySelector('.message').textContent = 'You lost the game!';
//     }
//     //When the number is too low!
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = ' Too Low!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     }
//     //When you lost of the game
//     else {
//       document.querySelector('.message').textContent = 'You lost the game!';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage(' Start guessing....');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  console.log(secretNumber);
});
