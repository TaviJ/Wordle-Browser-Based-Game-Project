# Word Guessing Game
A word guessing game inspired by *Wordle* built with **HTML, CSS, and JavaScript**. 
Players will have **6 guesses**  to figure out a **5 letter mystery word**. The game includes a virual keyboard, live feedback colors, and an instruction popup.

<img width="1710" height="986" alt="Screenshot 2025-11-20 at 12 17 54 PM" src="https://github.com/user-attachments/assets/c9401d5a-e67c-420e-b8a3-08dbc19906d4" />

 ## Features
 * Randome 5 letter word selection
 * Onscreen keyboard and real keyboard support
 * Color feedback:
   *Green = Correct letter and correct position
   *Purple = Correct letter but wrong position
   *Gray = letter absent from the word 
* Instruction popup
* Reset button after game ends
* Temporary message alerts
* Cute styling

## How to Play
* Type your guess using your keyboard **or** click the onscreen keyboard.
* Each guess must be excatly 5 letters.
* Hit **Enter** to submit.
* Use **Backspace** or **DEL** to remove letters.
* Color feedback appears to show how close your guess is.
* You only get **6 guesses**, so choice wisely!
* When the game ends, click **Play Again** to start over.

## Game Logic Overview 
### Input Handling 
* Uses `keydown` event listener to track real keyboard input.
* Click events on `.key` buttons lets players use the onscreen keyboard.

### Win/Lose Logic
* If `currentGuess === answer` the game shows "You Win!" and the game stops.
* If guesses reach 6 the game shows "Game Over" with the correct answer.

### Color Feedback
Each tile is colored based on its match in the secret word:
```if (letter === answer[i]) {
  squareEl.style.backgroundColor = 'green';
} else if (answer.includes(letter)) {
  squareEl.style.backgroundColor = 'purple';
} else {
  squareEl.style.backgroundColor = 'gray';
}
```

### Reset Logic 
Resets:
* board
* guesses
* background colors
* new random word

## Technologies Used
* HTML
* CSS
* JavaScript

## Future Improvments 
* Track stats
* Add word Vaildation
* Add difficulty modes
* Add daily puzzles
