//GLOBAL VARIABLES
//letters already guessed
const guessedLetters = document.querySelector(".guessed-letters");
//button to click to make a guess
const guessButton =document.querySelector(".guess");
//text input to guess a letter
const input = document.querySelector("input");
//mystery word in progress of being guessed
const wordInProgress = document.querySelector(".word-in-progress");
//number of guesses remaining
const remainingGuesses = document.querySelector(".remaining");
//spot for messages to the player
const message = document.querySelector(".message");
//button to play again
const playAgain = document.querySelector(".play-again");
//word to be guessed
const word = "magnolia";