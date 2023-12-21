const rPS = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return rPS[Math.floor(Math.random() * rPS.length)];
};

let playerScore = 0;
let computerScore = 0;

function game() {

  userInput = prompt("Let's play Rock-Paper-Scissors! Best 3 out of 5. Please enter one of the three below.");

   for (userInput == 'rock' || userInput == 'paper' || userInput == 'scissors';;) {

    computerChoice = getComputerChoice();
    
    playRound(userInput, computerChoice); 

    if (playRound(userInput, computerChoice) == 2 && playerScore == 2) {
      playerScore++;
      alert(`Congrats! You've won this game. Final Score: You: ${playerScore}, Computer: ${computerScore}.
       If you wan't to play again, please refresh the page.`);
      break;
    } else if(playRound(userInput, computerChoice) == 1 && computerScore == 2) {
      computerScore++;
      alert(`Sorry. You've lost this game. Final Score: You; ${playerScore}, Computer: ${computerScore}.
       If you'd like to try again, please refresh the page.`);
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
    } else;
  };