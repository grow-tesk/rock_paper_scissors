const rPS = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return rPS[Math.floor(Math.random() * rPS.length)];
};

let playerScore = 0;
let computerScore = 0;

function game() {

  userInput = prompt("Please enter either Rock, Paper, or Scissors below.");

   for (userInput == 'rock' || userInput == 'paper' || userInput == 'scissors';;) {

    computerChoice = getComputerChoice();
    
    playRound(userInput, computerChoice);

    if (playerScore > 2) {
      alert("Congrats! You've won this game.");
      break;
    } else if(computerScore > 2) {
      alert("Sorry. You've lost this game.")
      break;
    } else if (playRound(userInput, computerChoice) == 2) {
      playerScore++;
      userInput = prompt(`You won this round! Current Score: You:${playerScore}, Computer:${computerScore}`);
    } else if (playRound(userInput, computerChoice) == 1) {
      computerScore++;
      userInput = prompt(`You lose this round. Current Score: You:${playerScore}, Computer:${computerScore}`);
    } else if (playRound(userInput, computerChoice) == 0) {
      userInput = prompt(`You tied this round. Current Score: You:${playerScore}, Computer:${computerScore}`);
    } else {
      userInput = prompt("Please enter either rock, paper, or scissors.");
    };
    
  };
};







/*function game() {
  
  let playerSelection = prompt("Let's play Rock Paper Scissors.");
  
  if (playerScore < 3 && computerScore < 3) {
    if (playRound() == 2) {
      playerScore++;
      playerSelection = prompt(`You won this round! Current Score: You:${playerScore}, Computer:${computerScore}`);
    } else if (playRound() == 1) {
      computerScore++;
      playerSelection = prompt(`You lose this round. Current Score: You:${playerScore}, Computer:${computerScore}`)
    } else if (playRound() == 0) {
      playerSelection = prompt(`You tied this round. Current Score: You:${playerScore}, Computer:${computerScore}`);
    };
  } else if (playerScore == 3 && computerScore < 3) {
    return "Congrats! You've won!"
  } else if (playerScore < 3 && computerScore == 3) {
    return "Sorry, you lose. Refresh to play again."
  }; */

function playRound(playerSelection, computerSelection) {
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
        //playerSelection = prompt("Please enter either Rock, Paper, or Scissors.")
    };
  };
//};

//console.log(gameTest());