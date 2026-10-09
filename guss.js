// Generates a random number between 1 and 10 for the user to guess
let randomNumber = Math.floor(Math.random() * 10) + 1; 

function checkGuess() {
    // Gets the number typed into the input field and converts it to an integer
    let userNumber = parseInt(document.getElementById("guessInput").value);
    
    // Variable to store the message we will show to the user
    let resultText = "";
    
    // Checks if the user's guess exactly matches the random number
    if (userNumber === randomNumber) {
        resultText = "CONGRATULATIOON! CORRECT NUMBER";
    } 
    // Checks if the user's guess is higher than the random number
    else if (userNumber > randomNumber) {
        resultText = "Too High! Try Again";
    } 
    // If it's not correct and not too high, it must be too low
    else {
        resultText = "Too Less! Try Again";
    }
    
    // Updates the HTML paragraph tag with the final result text
    document.getElementById("result").textContent = resultText;
}