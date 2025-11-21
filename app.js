
/*-------------- Constants -------------*/
const maxGuesses = 6;
const wordLength = 5;
const wordList = ['BLINK', 'BERRY', 'STRAY', 'DREAM', 'PEACH', 'INDIE', 'SCONE', 'TOPAZ', 'VINYL', 'SLOTH', 'STORM', 'HONEY', 'LIGHT'];
let answer = wordList[Math.floor(Math.random() * wordList.length)];


/*---------- Variables (state) ---------*/
let currentGuess = '';
let currentRow = 0;
let currentCol = 0;
let gameOver = false;

/*----- Cached Element References  -----*/
const squareEls = document.querySelectorAll(".sqr");
const answerEl = document.getElementById("answer");
const messageEl = document.getElementById("message");
const resetBtn = document.getElementById("reset-btn");
const instructionsBtn = document.getElementById("instructions-btn");
const instructionsPopup = document.getElementById("instructions-popup");
const closeInstructionsBtn = document.getElementById("close-instructions-btn");

/*-------------- Functions -------------*/
function addLetter(letter) {
  if (gameOver) return; 
  if (currentCol < wordLength) {
    const squareIndex = currentRow * wordLength + currentCol;
    squareEls[squareIndex].textContent = letter;
    currentGuess += letter;
    currentCol++;
  }
} 
function deleteLetter() {
  if (gameOver) return;
  if (currentCol > 0) {
    currentCol--;
    const squareIndex = currentRow * wordLength + currentCol;
    squareEls[squareIndex].textContent = '';
    currentGuess = currentGuess.slice(0, -1);
  }

}
function submitGuess() {
  if (gameOver) return;
  if (currentGuess.length !== wordLength) {
    showMessage("Guess must be 5 letters");
    return;
  }


  for (let i = 0; i < wordLength; i++) {
    const squareIndex = currentRow * wordLength + i;
    const squareEl = squareEls[squareIndex];
    const letter = currentGuess[i];

    if (letter === answer[i]) {
      squareEl.style.backgroundColor = 'green';
    } else if (answer.includes(letter)) {
      squareEl.style.backgroundColor = 'purple';
    } else {
      squareEl.style.backgroundColor = 'gray';
    }
  }

  if (currentGuess === answer) {
    showMessage("You Win!");
    gameOver = true;
    resetBtn.style.display = 'block';
    return;
     
  }

  currentRow++;
  currentCol = 0;
  currentGuess = '';

  if (currentRow === maxGuesses) {
    showMessage(`Game Over, The answer was ${answer}`);
    gameOver = true;
    resetBtn.style.display = 'block';
  }
}
function showMessage(msg) {
  messageEl.textContent = msg;
  setTimeout(() => {
    messageEl.textContent = '';
  }, 3000);
}

function resetGame() {
  currentGuess = '';
  currentRow = 0;
  currentCol = 0;
  gameOver = false;
  squareEls.forEach(sq => {
    sq.textContent = '';
    sq.style.backgroundColor = '';
  });
  answer = wordList[Math.floor(Math.random() * wordList.length)];
  messageEl.textContent = '';
  resetBtn.style.display = 'none';
}

/*----------- Event Listeners ----------*/
document.addEventListener('keydown', function (e) {
  if (gameOver) return;
  const key = e.key.toUpperCase();

  if (key >= 'A' && key <= 'Z' && key.length === 1) {
    addLetter(key);
  } else if (key === "BACKSPACE") {
    deleteLetter();
  } else if (key === "ENTER") {
    submitGuess();
  }
});


document.querySelectorAll('.key').forEach(keyBtn => {
  keyBtn.addEventListener('click', () => {
if (gameOver) return;
    const key = keyBtn.textContent.toUpperCase();



    if (key === "ENTER") {
      submitGuess();
    } else if (key === "DEL") {
      deleteLetter();
    } else if (key.length === 1 && key >= "A" && key <= "Z") {
      addLetter(key);
    }
  });
});

resetBtn.addEventListener('click', resetGame);

instructionsBtn.addEventListener('click', () => {
  instructionsPopup.classList.remove('hidden');
});

closeInstructionsBtn.addEventListener('click', () => {
  instructionsPopup.classList.add('hidden');
});

/*------------ Code Graveyard -------------*/

// pick random word = answer 
//  SET number of guesses = 0
// number of guesses =< 6
// GET guess from player
// IF guess is not 5 letters SHOW "guess must be 5 letters"
// IF guess is not a real word SHOW "not a vaild word"
// call result = checkGuess
// IF letter is in the word in the right spot letter will turn Green
// IF letter is in the word in the wrong spot letter will turn Purple
// IF letter is not in the word letter will turn Gray
// IF guess = answer show "You Win!" 
// game stops
// number of guesses= number of guesses +1
// IF user uses all 6 guesses SHOW "Game Over, Answer was___" 
// game stops