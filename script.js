// Random number generation
let randomNumber = Math.floor(Math.random() * 101); // Random number between 0-100
let chances = 10;
let userGuess;

// Get elements from the DOM
const guessButton = document.getElementById('guessButton');
const userGuessInput = document.getElementById('userGuess');
const message = document.getElementById('message');
const chancesLeft = document.getElementById('chancesLeft');
const gameOverMessage = document.getElementById('gameOverMessage');
const finalResult = document.getElementById('finalResult');
const generatedNumber = document.getElementById('generatedNumber');

// Event listener for the "Guess" button
guessButton.addEventListener('click', function() {
    userGuess = parseInt(userGuessInput.value);

    if (isNaN(userGuess) || userGuess < 0 || userGuess > 100) {
        message.textContent = "Please enter a valid number between 0 and 100!";
        return;
    }

    // Reduce chances after each guess
    chances--;
    chancesLeft.textContent = chances;

    // Check if the guess is correct, too high or too low
    if (userGuess === randomNumber) {
        message.textContent = "Congratulations! You guessed the correct number!";
        message.style.color = "#4CAF50";
        finalResult.textContent = "You won! 🎉";
        gameOver();
    } else if (userGuess < randomNumber) {
        message.textContent = "Too low! Try again!";
    } else {
        message.textContent = "Too high! Try again!";
    }

    // If no chances left, end the game
    if (chances === 0) {
        gameOver();
    }

    // Clear the input field
    userGuessInput.value = '';
});

// Function to end the game
function gameOver() {
    guessButton.disabled = true; // Disable the guess button
    generatedNumber.textContent = randomNumber;
    gameOverMessage.style.display = 'block'; // Show the game over message
    finalResult.textContent = "Game Over! The number was " + randomNumber + " 😔";
}

