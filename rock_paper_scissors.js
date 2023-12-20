const rPS = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return rPS[Math.floor(Math.random() * rPS.length)];
};

let userInput = prompt("Let's play Rock Paper Scissors.");
  
const playerSelection = userInput.toLowerCase();
const computerSelection = getComputerChoice();

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (
        playerSelection == 'rock' && computerSelection == 'scissors' ||
        playerSelection == 'scissors' && computerSelection == 'paper' ||
        playerSelection == 'paper' && computerSelection == 'rock'
    ) {
        playerScore++;
        return `You won this round! Current Score: You:${playerScore}, Computer:${computerScore}`;
    } else if (
        playerSelection == 'rock' && computerSelection == 'paper' ||
        playerSelection == 'paper' && computerSelection == 'scissors' ||
        playerSelection == 'scissors' && computerSelection == 'rock'
    ) {
        computerScore++;
        return `You lose this round. Current Score: You:${playerScore}, Computer:${computerScore}`;
    } else if (
        playerSelection == 'rock' && computerSelection == 'rock' ||
        playerSelection == 'scissors' && computerSelection == 'scissors' ||
        playerSelection == 'paper' && computerSelection == 'paper'
     ) {
        return `You tied this round. Current Score: You:${playerScore}, Computer:${computerScore}`;
    } else {
        return "Please enter either Rock, Paper, or Scissors."
    };
};

function game() {
    if (playRound(playerSelection, computerSelection) == `You won this round! Current Score: You:${playerScore}, Computer:${computerScore}`) {
        return "hello."
    } else if (playRound(playerSelection, computerSelection) == `You lose this round. Current Score: You:${playerScore}, Computer:${computerScore}`) {
        return "goodbye."
    };
 };

  
  console.log(playRound(playerSelection, computerSelection));

  