// Return a computer choice
function getComputerChoice() {
    // Create an array with computer choices
    const computerChoices = ['Rock', 'Paper', 'Scissors'];

    // Create a computer choice
    const computerChoice = Math.floor(Math.random() * computerChoices.length);

    // Return the computer choice
    return computerChoices[computerChoice];
}

// Play a round
function playRound(playerSelection, computerSelection) {
    // Make a selection case-insensitive
    function fixSelection(selection) {
        const lowerCaseSelection = selection.toLowerCase();

        return lowerCaseSelection.charAt(0).toUpperCase() + lowerCaseSelection.slice(1);
    }

    // Create a message about a player's victory
    const victoryMessage = `You've won! ${fixSelection(playerSelection)} beats ${computerSelection}`;

    // Create a message about a player's defeat
    const defeatMessage = `You've lost! ${computerSelection} beats ${fixSelection(playerSelection)}`;

    // Check if playerSelection has the 'Rock' value and computerSelection doesn't have the 'Paper' value
    // Check if playerSelection has the 'Paper' value and computerSelection doesn't have the 'Scissors' value
    // Check if playerSelection has the 'Scissors' value and computerSelection doesn't have the 'Rock' value
    if (playerSelection === 'Rock' && computerSelection !== 'Paper') {
        console.log(victoryMessage);

        return true;

    } else if (playerSelection === 'Paper' && computerSelection !== 'Scissors') {
        console.log(victoryMessage);

        return true;

    } else if (playerSelection === 'Scissors' && computerSelection !== 'Rock') {
        console.log(victoryMessage);

        return true;

    } else {
        console.log(defeatMessage);

        return false;
    }
}

// Play the game five times in a row and announce a winner
function game() {
    // Define a counter for a player
    let playerCounter = 0;

    // Define a counter for a computer
    let computerCounter = 0;

    // Define a victory message
    const victoryMessage = 'You\'ve won!';

    // Define a defeat message
    const defeatMessage = 'You\'ve lost!';

    // Play the game five times in a row
    for (let index = 0; index < 5; index++) {
        // Get playerSelection
        const playerSelection = prompt('Rock, Paper or Scissors?');
        // Get computerSelection
        const computerSelection = getComputerChoice();
        // Play the game
        const game = playRound(playerSelection, computerSelection);
        // Add a point to the game winner
        game ? playerCounter++ : computerCounter++;
    }

    // Return a message about either a victory or a defeat
    return (playerCounter > computerCounter) ? victoryMessage : defeatMessage;
}

console.log(game());
