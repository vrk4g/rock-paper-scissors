// Returns a computer choice
function getComputerChoice() {
    // Creates an array with computer choices
    const computerChoices = ['Rock', 'Paper', 'Scissors'];

    // Creates a computer choice
    const computerChoice = Math.floor(Math.random() * computerChoices.length);

    // Returns the computer choice
    return computerChoices[computerChoice];
}
