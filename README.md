# WHRDL Word Guessing Game

This is a mobile app built with [Expo](https://docs.expo.dev/) and [React Native](https://reactnative.dev/).  It employs React functional Components, React hooks, and React Native built-in components.

WHRDL is a riff on a popular word-guessing game.  The player has up to six tries to guess a five-letter word correctly.  With each incorrect guess, hints are provided in the form of color-coded letter cards and keyboard keys.

## The app consists of six total Components and a Datamuse module:

* **App**, the root component.  Renders the Header, Board, and Keyboard components.

* **Header** displays the game title and an h2 element which displays a conditionally determined end-of-game message, and renders a 'RESET' button and a 'HINT' button.

* **Board**, which renders six Row components

* **Row**, which renders five letter cards (Text components whose values and background colors are tied to state variables.)

* **Keyboard**, a custom built keyboard component which renders 26 letter Keys and two function keys.  Each letter key changes color when the corresponding letter has been guessed.

* **LetterKey**, rendered in Keyboard, triggering an onPress event which updates the state of the App.
   
* **Datamuse** This module contains an object (Datamuse) containing all of the logic for communicating with the Datamuse API.

## Basic Functionality:

The app makes three different API calls throughout gameplay:

1. On first render, and again on any press event on the 'reset' button, a call is made for a new target word
2. On a word guess submit event, a call is made to check that the submitted word exists in the database (if not, the user is alerted that their guess is invalid)
3. On press event on the 'hint' button, a call is made for trigger words associated with the target word

The App component manages seven pieces of state:

1.  `guessState`, an object (the board) whose initial value is six arrays (rows) filled with five empty strings (letter-guesses).  As the player enters guesses, letter key presses trigger state changes to update each empty string in sequence.  A backspace key event updates guessState among other state values.  An enter key press event triggers a word entry.
2. `letterMatches`, an object containing six arrays of five strings each which hold the hex code background color values for the letter squares on the board.  Initial value is white, which is conditionally changed to gray, yellow, or green on word guess entry.
3. `keyboardMatch`, similar to letterMatches, this object holds conditionally updated background colors for the letter keys of the keyboard.
4. `currentGuess`, a string that keeps track of which row is the current input row.  Updates through a handleWordEntry method triggered by the enter key press.
5. `currentLetter`, a number that keeps track of which letter square is the current input square.  Updates through a handleLetterEntry method triggered by a letter key press, or through a handleDelete method triggered by a backspace key press.
6. `headerMessage`, initialized to an empty string, updates at end-of-game to alert the player whether they have won or lost.
7. `targetWord`, set at first render and again any time the 'reset' button is pressed.  Tied to a Datamuse API call.

The handleWordEntry method includes an API call which sends the guessed word to Datamuse to check for its presence in the database.  If no match is found, the player is alerted that their guess is not valid.

An added caveat is the 'hint' button, whose onPress triggers a call to the Datamuse endpoint for trigger words associated with the current target word.  A list of up to ten trigger words is delivered as a hint to the player in an alert.
