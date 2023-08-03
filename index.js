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
    // the div with a result
    const result = document.querySelector("#result");

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
        result.textContent = victoryMessage;

        return true;

    } else if (playerSelection === 'Paper' && computerSelection !== 'Scissors') {
        result.textContent = victoryMessage;

        return true;

    } else if (playerSelection === 'Scissors' && computerSelection !== 'Rock') {
        result.textContent = victoryMessage;

        return true;

    } else {
        result.textContent = defeatMessage;

        return false;
    }
}

const playerSelections = document.querySelectorAll("button");
const score = document.querySelector("#score"); // the div with a score
let playerScore = 0;
let computerScore = 0;

// Plays a round if a user clicks on one of the buttons
playerSelections.forEach(selection => {
    selection.addEventListener("click", event => {
        event.preventDefault();

        const round = playRound(selection.textContent, getComputerChoice());

        // Adds a point to a winner
        round ? playerScore++ : computerScore++;

        if (playerScore === 5 || computerScore === 5) {
            const winner = playerScore > computerScore ? "You've won the game" : "You've lost the game";

            score.textContent = winner + ` by the score of ${playerScore} to ${computerScore}`;

            playerScore = 0;
            computerScore = 0;
        } else {
            score.textContent = `You - ${playerScore} | Computer - ${computerScore}`;
        }
    })
});
