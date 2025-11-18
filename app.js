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

/*-------------- Constants -------------*/
const maxGuesses = 6;
const wordLength = 5;
const wordList = ['BLINK', 'BERRY', 'STRAY', 'DREAM', 'PEACH', 'INDIE', 'SCONE', 'TOPAZ', 'VINYL', 'SLOTH', 'STORM', 'HONEY', 'LIGHT'];
const answer = wordList[Math.floor(Math.random() * wordList.length)];

/*---------- Variables (state) ---------*/
let currentGuess = '';
let currentRow = 0;
let currentCol = 0;
let gameOver = false;

/*----- Cached Element References  -----*/
const squareEls = document.querySelectorAll(".sqr");
const answerEl = document.getElementById("answer");
/*-------------- Functions -------------*/


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


