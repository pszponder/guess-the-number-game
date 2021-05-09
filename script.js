// Generate Number that User has to Guess
function createGuess(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
}

const a = 1;
const b = 100;
var guess = createGuess(a, b);
console.log('Number: ' + guess); // TODO: Remove this line later

// Add eventListener to the Submit Button
var userGuesses = [];

document.getElementById('submit').addEventListener('click', function (event) {
    // Extract User Input and Store It
    var userGuess = parseInt(document.getElementById('guess').value, 10);
    console.log(userGuess);
    document.getElementById('guess').value = '';
    userGuesses.push(userGuess);

    console.log(evalGuess(userGuess, guess)); // TODO: Remove this line later

    // Evaluate User Input and Inform User How to Proceed
    determineNextStep(evalGuess(userGuess, guess));

    // Reset the Game if the User Wins
});

// Create a function to Evaluate User Input and Compare it to the Guess Value
function evalGuess(userGuess, guess) {
    if (Number.isInteger(userGuess)) {
        if (userGuess < a || userGuess > b) {
            return 'notInRange';
        } else if (userGuess == guess) {
            return 'win';
        } else if (userGuess < guess) {
            return 'low';
        } else {
            return 'high';
        }
    } else {
        return 'NaN';
    }
}

// Tell the User if They Guessed Correctly or Incorrectly
// Reset the Game if the User Wins
function determineNextStep(evaluation) {
    switch (evaluation) {
        case 'notInRange':
            alert('Please enter an integer value within the specified range');
            break;
        case 'low':
            alert('You guessed too low, try again.');
            break;
        case 'high':
            alert('You guessed too high, try again.');
            break;
        case 'NaN':
            alert('Please enter an integer value');
            break;
        case 'win':
            alert("You Win! Let's play again!");
            resetGame();
            break;
    }
}

// Reset the Game
function resetGame() {
    userGuesses = [];
    guess = createGuess(a, b);
}
