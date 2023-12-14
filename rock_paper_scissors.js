const rPS = ["rock", "paper", "scissors"];

function getComputerChoice() {
    console.log(rPS[Math.floor(Math.random() * rPS.length)]);
};

function playRound(playerSelection, computerSelection) {
    if (
        playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock"
       ) {
        return "You Win!"
    } else if (
        playerSelection === "rock" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "rock"
    ) {
        return "You Lose. :("
    } else {
        return "You've Tied, Try Again."
    }
  };

  const playerSelection = "scissors";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));