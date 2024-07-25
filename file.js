// Variable to store computer choices
let computerChoices = ["rock", "paper", "scissors"];

// Variables to store scores
let scores = {
    human: 0,
    computer: 0
};

// Function to get a random value from an array
function getRandomValueFromArray(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

// Function to get human choice
function getHumanChoice() {
    return new Promise((resolve) => {
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                resolve(button.id);
            });
        });
    });
}

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

async function playGame() {
    const userChoice = await getHumanChoice();
    console.log(`You chose: ${userChoice}`);
    
    let computerChoice = getRandomValueFromArray(computerChoices);
    console.log(`Computer chose: ${computerChoice}`);
    
    let result = playRound(userChoice, computerChoice);
    alert(result);
    alert(`Scores: Player - ${scores.human}, Computer - ${scores.computer}`);
}

playGame();
