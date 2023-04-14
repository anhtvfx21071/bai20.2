'use strict';
const player0El = document.querySelector('.player--0');// Khung hình người chơi 1
const player1El = document.querySelector('.player--1');// khung hình người chơi 2
const score0El = document.querySelector('#score--0'); // điểm người chơi 1 đang có
const score1El = document.getElementById('score--1');// điểm người chơi 2 đang có
const current0El = document.getElementById('current--0'); // điểm người chơi 1 đang tung xúc xắc
const current1El = document.getElementById('current--1'); // điểm người chơi 2 đang tung xúc xắc
const diceEl = document.querySelector('.dice'); //Hình ảnh xúc xắc
const btnNew = document.querySelector('.btn--new'); //nút nhấn chơi lại game
const btnRoll = document.querySelector('.btn--roll'); // nút nhấn tung xúc xắc
const btnHold = document.querySelector('.btn--hold'); // nút nhấn giữ xúc xắc
let scores, currentScore, activePlayer, playing;
//Trả về giá trị ban đầu
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// tung xúc xắc
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. tạo một biến số ngẫu nhiên 1 đén 6
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. gọi hình tương ứng với giá trị
    diceEl.classList.remove('hidden');
    diceEl.src = `${dice}.jpg`;

    // 3.kiểm tra giá trị xúc xắc với giá trị 1
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. đưa giá trị từ curent vào tổng tích lũy
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. Kiểm tra số điểm chiến thắng 
    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});
btnNew.addEventListener('click', function(){
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
});