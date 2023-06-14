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


    // Check if playerSelection value equals to computerSelection value
    if (playerSelection === computerSelection) {
        return 'It\'s been a draw!';
    }
    // Check if playerSelection has the 'Rock' value and computerSelection doesn't have the 'Paper' value
    else if (playerSelection === 'Rock' && computerSelection !== 'Paper') {
        return victoryMessage;
    // Check if playerSelection has the 'Paper' value and computerSelection doesn't have the 'Scissors' value
    } else if (playerSelection === 'Paper' && computerSelection !== 'Scissors') {
        return victoryMessage;
    // Check if playerSelection has the 'Scissors' value and computerSelection doesn't have the 'Rock' value
    } else if (playerSelection === 'Scissors' && computerSelection !== 'Rock') {
        return victoryMessage;
    // Return if none of above works out
    } else {
        return defeatMessage;
    }
}

const playerSelection = 'Scissors';
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));