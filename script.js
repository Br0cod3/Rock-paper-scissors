let humanScore = 0;
let computerScore = 0;
const outputLog = document.querySelector(".final-result");
const userChoice = document.querySelector(".user-score");
const compChoice = document.querySelector(".computer-score");

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

function gameOver() {
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            outputLog.innerHTML = "<em>You Won! ^.^</em>";
            humanScore = 0;
            computerScore = 0;
            userChoice.innerHTML = `<em>Your Score: ${humanScore}</em>`;
            compChoice.innerHTML = `<em>Computer Score: ${computerScore}</em>`;
        }
        else {
            outputLog.innerHTML = "<em>You Lost :-(</em>";
            humanScore = 0;
            computerScore = 0;
            userChoice.innerHTML = `<em>Your Score: ${humanScore}</em>`;
            compChoice.innerHTML = `<em>Computer Score: ${computerScore}</em>`;
        }
    }
}

function playRound(humanChoice, computerChoice) {
                outputLog.textContent = ""

    if (humanChoice == "Rock" && computerChoice == "Scissors") {
        outputLog.innerHTML = "<em>You win! Rock beats Scissors.</em>";
        humanScore++;
        userChoice.innerHTML = `<em>Your Score: ${humanScore}</em>`;
    }
    else if (humanChoice == "Paper" && computerChoice == "Rock") {
        outputLog.innerHTML = "<em>You win! Paper beats Rock.</em>";
        humanScore++;
        userChoice.innerHTML = `<em>Your Score: ${humanScore}</em>`;
    }
    else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        outputLog.innerHTML = "<em>You win! Scissors beats Paper.</em>";
        humanScore++;
        userChoice.innerHTML = `<em>Your Score: ${humanScore}</em>`;
    }
    else if (humanChoice === computerChoice) {
        outputLog.innerHTML = `<em>It's a draw you both chose ${humanChoice}</em>`;
    }
    else {
        outputLog.innerHTML = `<em>You lose ${computerChoice} beats ${humanChoice}</em>`;
        computerScore++;
        compChoice.innerHTML = `<em>Computer Score: ${computerScore}</em>`;
    }

    gameOver();

}

const buttons = document.querySelectorAll(".btn")
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        playRound(buttons[i].textContent, getComputerChoice());
    })
}
