const lettersGuessed = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const guessLetterText = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingGuessesNumber = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];

// Placeholder for letters guessed
const placeholder = function (word) {
  const placeholderLetters = [];
  for (const letter in word) {
    console.log(letter);
    placeholderLetters.push("●");
  }
  wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

guessButton.addEventListener("click", function (e) {
  e.preventDefault();
  // Empty message paragraph
  message.innerText = "";
  // Grabs the input entered
  const guess = guessLetterText.value;
  const goodGuess = playerInput(guess);
  
  if (goodGuess) {
    // Letter has been entered. 
    makeGuess(guess);
  }
  guessLetterText.value = "";
});

const playerInput = function (input) {
  const acceptedLetter = /[a-zA-Z]/
  if (input.length === 0) {
    // Checks for empty input
    message.innerText = "Please enter a letter."
  } else if (input.length > 1 ) {
    // Checks for a multiple letters
     message.innerText = "Please enter a single letter." 
  } else if (!input.match(acceptedLetter)) {
    // CHecks that input is a letter
    message.innerText = "Please enter a letter from A to Z."
  } else {
    // Single letter entered
    return input; 
  }
};

const makeGuess = function (guess) {
  guess = guess.toUpperCase();

  if  (guessedLetters.includes(guess)) {
    // Checks for duplicate letter quessed
    message.innerText = "You already tried that letter."
  } else {
    guessedLetters.push(guess);
    console.log(guessedLetters);
  }
}