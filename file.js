// Variable to store computer choices
let computerChoices = ["rock", "paper", "scissors"];

// Function to get a random value from an array
function getRandomValueFromArray(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

let result = getRandomValueFromArray(computerChoices);
console.log("comp plays " + result);

// Function to get human choice
function getHumanChoice() {
    let validChoices = ["rock", "paper", "scissors"];
    let userInput = prompt("Enter your choice: rock, paper, or scissors:");
    while (!validChoices.includes(userInput)) {
        userInput = prompt("Invalid choice. Please enter rock, paper, or scissors:");
    }
    return userInput;
}

let resultTwo = getHumanChoice(); // No argument needed
console.log(resultTwo);

// Variables to store scores
let scores = {
    human: 0,
    computer: 0
};

// Function to play a single round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        scores.human++; 
        return "Player wins!";
    } else {
        scores.computer++; 
        return "Computer wins!";
    }
}

// Logic to play the entire game
function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getRandomValueFromArray(computerChoices);
        
        const result = playRound(humanSelection, computerSelection);
        console.log(`Round ${i + 1}: ${result} (Human chose ${humanSelection}, Computer chose ${computerSelection})`);
    }
    console.log(`Final Score - Human: ${scores.human}, Computer: ${scores.computer}`);
}

// Start the game
playGame();
