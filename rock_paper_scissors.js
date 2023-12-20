const rPS = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return rPS[Math.floor(Math.random() * rPS.length)];
};

const computerSelection = getComputerChoice();

let playerScore = 0;
let computerScore = 0;

function game() {

  let playerSelection = prompt("Let's play Rock Paper Scissors.");



  if (playerScore < 3 && computerScore < 3) {
    if (playRound(playerSelection, computerSelection) == 2) {
      playerScore++;
      playerSelection = prompt(`You won this round! Current Score: You:${playerScore}, Computer:${computerScore}`);
      playRound(playerSelection, computerSelection);
    } else if (playRound(playerSelection, computerSelection) == 1) {
      computerScore++;
      playerSelection = prompt(`You lose this round. Current Score: You:${playerScore}, Computer:${computerScore}`)
      playRound(playerSelection, computerSelection);
    } else if (playRound(playerSelection, computerSelection) == 0) {
      playerSelection = prompt(`You tied this round. Current Score: You:${playerScore}, Computer:${computerScore}`);
      playRound(playerSelection, computerSelection);
    };
  } else if (playerScore == 3 && computerScore < 3) {
    return "Congrats! You've won!"
  } else if (playerScore < 3 && computerScore == 3) {
    return "Sorry, you lose. Refresh to play again."
  };


function playRound() {
    if (
        playerSelection == 'rock' && computerSelection == 'scissors' ||
        playerSelection == 'scissors' && computerSelection == 'paper' ||
        playerSelection == 'paper' && computerSelection == 'rock'
    ) {
        return 2;
    } else if (
        playerSelection == 'rock' && computerSelection == 'paper' ||
        playerSelection == 'paper' && computerSelection == 'scissors' ||
        playerSelection == 'scissors' && computerSelection == 'rock'
    ) {
        return 1;
    } else if (
        playerSelection == 'rock' && computerSelection == 'rock' ||
        playerSelection == 'scissors' && computerSelection == 'scissors' ||
        playerSelection == 'paper' && computerSelection == 'paper'
     ) {
        return 0;
    } else {
        playerSelection = prompt("Please enter either Rock, Paper, or Scissors.")
    };
  };
};

  console.log(game());