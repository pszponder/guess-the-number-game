// Generate Number that User has to Guess
function createGuess(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
}

const a = 1;
const b = 100;
var guess = createGuess(a, b);

// Add eventListener to the Submit Button
var userGuesses = [];

document.getElementById('submit').addEventListener('click', function (event) {
    // Extract User Input and Store It
    var userGuess = parseInt(document.getElementById('guess').value, 10);
    document.getElementById('guess').value = '';
    userGuesses.push(userGuess);

    // Evaluate User Input and Inform User How to Proceed
    reportError(evalGuess(userGuess, guess));

    // Display User Guesses on the Screen
    evaluatedStep = evalGuess(userGuess, guess);
    displayGuess(userGuess, evaluatedStep);
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
function reportError(evaluation) {
    switch (evaluation) {
        case 'notInRange':
            alert('Please enter an integer value within the specified range');
            break;
        case 'NaN':
            alert('Please enter an integer value');
            break;
        case 'win':
            resetFunction();
            alert('You Win!');
            break;
    }
}

// Declare Function to Display User's Guess on the Screen
function displayGuess(userGuess, evalStep) {
    // console.log('evaluated step: ', evalStep);
    if (evalStep === 'low' || evalStep === 'high') {
        var guessDiv = document.createElement('div');
        guessDiv.innerHTML = `<p> You guessed: ${userGuess}. Your guess is ${evalStep}. </p>`;
        document.body.appendChild(guessDiv);
    } else if (evalStep === 'win') {
        var guessDiv = document.createElement('div');
        guessDiv.innerHTML = `<p> You guessed: ${userGuess}. You Win! </p>`;
        document.body.appendChild(guessDiv);
    }
}

// Add Event Listener Function to Reset Button
document.getElementById('reset').addEventListener('click', function (event) {
    resetFunction();
});

function resetFunction() {
    location.reload();
    userGuesses = [];
    guess = createGuess(a, b);
}
