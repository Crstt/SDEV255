function playGuessingGame(numToGuess, totalGuesses = 10) {
    let guesses = 0;
    let promptText = "Enter a number between 1 and 100.";
  
    while (guesses < totalGuesses) {
      const userInput = prompt(promptText);
  
      if (userInput === null) {
        return 0; // User pressed Cancel
      }
  
      if ( isNaN(userInput)) {
        promptText = "Please enter a number.";
        continue;
      }
  
      const guess = parseInt(userInput);
  
      if (guess === numToGuess) {
        return guesses + 1; // Correct guess
      } else if (guess < numToGuess) {
        promptText = `${guess} is too small. Guess a larger number.`;
      } else {
        promptText = `${guess} is too large. Guess a smaller number.`;
      }
  
      guesses++;
    }
  
    return 0; // Exceeded totalGuesses without guessing correctly
  }
