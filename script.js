function getComputerChoice() {
    const rand = Math.random();
    if (rand < 0.333) {
        return "Rock";
    }
    else if (rand < 0.666) {
        return "Paper";
    }
    return "Scissors";
}

function getHumanChoice() {
    let userChoice = prompt("What is your pick: 'Rock', 'Paper' or 'Scissors'");
    if (userChoice === null || userChoice.trim() == "") {
        return getHumanChoice();
    }
    else {
        return userChoice.trim();
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
    let humanChoiceCasing = `${humanChoice[0].toUpperCase()}${humanChoice.slice(1).toLowerCase()}`
    let computerChoiceCasing = `${computerChoice[0].toUpperCase()}${computerChoice.slice(1).toLowerCase()}`

    if (humanChoiceCasing == "Rock" && computerChoiceCasing == "Scissors") {
        console.log("You win! Rock beats Scissors.");
        humanScore++;
    }
    else if (humanChoiceCasing == "Paper" && computerChoiceCasing == "Rock") {
        console.log("You win! Paper beats Rock.");
        humanScore++;
    }
    else if (humanChoiceCasing == "Scissors" && computerChoiceCasing == "Paper") {
        console.log("You win! Scissors beats Paper.");
        humanScore++;
    }
    else if (humanChoiceCasing === computerChoiceCasing) {
        console.log(`It's a draw you both chose ${humanChoiceCasing}`)
    }
    else {
        console.log(`You lose ${computerChoiceCasing} beats ${humanChoiceCasing}`);
        computerScore++;
    }
}


    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        alert("You won the game!")
    }
    else if (computerScore > humanScore) {
        alert("You Lost the game")
    }
    else {
        alert("It's a tie!")
    }
}

    
let play = document.addEventListener("click", (event) =>{
    if (event.target.classList.contains("btn")) {
        playGame();
    }
})

