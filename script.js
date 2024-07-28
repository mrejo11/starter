'use strict';

//selecting element
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

//starting condition
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

const scores = [0, 0];
let activePlayer = 0;
let currentScore = 0;
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
//rolling dice funcyion functionality
btnRoll.addEventListener('click', function () {
  if (playing === true) {
    //1. generating randomdice
    const randomdiceroll = Math.trunc(Math.random() * 6) + 1;

    //2.display dice
    dice.classList.remove('hidden');
    dice.src = `dice-${randomdiceroll}.png`;

    //3.check for roll1: if true,

    if (randomdiceroll !== 1) {
      //add dice to current score
      currentScore += randomdiceroll;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to next player
      switchPlayer();
    }
  }
});
btnHold.addEventListener('click', function () {
  if (playing) {
    //1.add current score to active players score
    scores[activePlayer] += currentScore;

    // scores[1] = scores[1]+currentscore
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2.check if player scoore is>=100
    //finish the game
    
    if (scores[activePlayer] >= 100) {
      playing = false;
      dice.classList.add('hidden')
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //3.switch to the next player
      switchPlayer();
    }
  }
});
