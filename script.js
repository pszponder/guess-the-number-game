// Generate Number that User has to Guess
function createGuess(min, max) {
    return Math.random() * (max - min) + min;
}

const guess = createGuess(1, 100);


// Extract User Input and Store It
document.getElementById("submit").addEventListener("click", extractGuess);

function extractGuess() {
    var userGuess = document.getElementsById("guess").value;
    console.log(userGuess);
    alert("Your Guess: " + userGuess);
    return userGuess;
}


// Evaluate User Input and Compare it to the Guess Value
function evalGuess(userGuess, guess) {
    if ( userGuess.isInteger() ) {
        if (userGuess == guess) {
            return "win";
        } else if (userGuess < guess) {
            return "low";
        } else {
            return "high";
        }
    } else {
        alert("Please enter an integer value.");
    }
}

// Tell the User if They Guessed Correctly or Incorrectly

// End the Game

// Reset the Game