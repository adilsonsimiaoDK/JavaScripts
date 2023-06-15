'use strict';
//dice game

const score0 = (document.getElementById('score--1').textContent = 0);
const score1 = (document.querySelector('#score--0').textContent = 0);
const current0El = document.querySelector('current--0');
const current1El = document.querySelector('current--1');

const diceEl = document.querySelector('.dice');
const newBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayear = 0;
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayear}`).textContent = 0;
  currentScore = 0;
  activePlayear = activePlayear === 0 ? 1 : 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

rollBtn.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    //Show dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //switch of player
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayear}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

holdBtn.addEventListener('click', function () {
  if (playing) {
    //1. add current score to ative player's score

    scores[activePlayear] += currentScore;
    //score[0] = score[0] + currentScore

    //Switch the player

    document.getElementById(`score--${activePlayear}`).textContent =
      scores[activePlayear];

    //2. ckeck if player's scoore is >= 100

    if (scores[activePlayear] >= 20) {
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayear}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayear}`)
        .classList.remove('player--active');
    } else {
      //
      switchPlayer();
    }
  }
});
document.querySelector('.btn--new').addEventListener('click', function () {
  location.reload();
});
