const rPS = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return rPS[Math.floor(Math.random() * rPS.length)];
};

let playerScore = 0;
let computerScore = 0;

function game(userInput) {

  let score = document.querySelector('div');
  
   for (;playerScore < 5 && computerScore < 5;) {
     
    computerChoice = getComputerChoice();
  
   playRound(userInput, computerChoice); 

    if (playRound(userInput, computerChoice) == 'win' && playerScore == 4) {
      playerScore++;
      score.textContent = `You won this round! Score: You: ${playerScore}, Computer: ${computerScore}. Congrats, you win! Refresh to play again.`;
      break;
    } else if(playRound(userInput, computerChoice) == 'lose' && computerScore == 4) {
      computerScore++;
      score.textContent = `You lost this round. Score: You: ${playerScore}, Computer: ${computerScore}. Sorry, you lost this game. Refresh to try again.`;
      break;
    } else if (playRound(userInput, computerChoice) == 'win') {
      playerScore++;
      score.textContent = `You won this round! Score: You: ${playerScore}, Computer: ${computerScore}`;
      break;
    } else if (playRound(userInput, computerChoice) == 'lose') {
      computerScore++;
      score.textContent = `You lost this round. Score: You: ${playerScore}, Computer: ${computerScore}`;
      break;
    } else if (playRound(userInput, computerChoice) == 'tie') {
      score.textContent = `You tied, try again. Score: You: ${playerScore}, Computer: ${computerScore}`;
      break;
    }; 
  };
}; 

function playRound(playerSelection, computerSelection) {
    if (
        playerSelection == 'rock' && computerSelection == 'scissors' ||
        playerSelection == 'scissors' && computerSelection == 'paper' ||
        playerSelection == 'paper' && computerSelection == 'rock'
    ) {
        return 'win';
    } else if (
        playerSelection == 'rock' && computerSelection == 'paper' ||
        playerSelection == 'paper' && computerSelection == 'scissors' ||
        playerSelection == 'scissors' && computerSelection == 'rock'
    ) {
         return 'lose';
    } else if (
        playerSelection == 'rock' && computerSelection == 'rock' ||
        playerSelection == 'scissors' && computerSelection == 'scissors' ||
        playerSelection == 'paper' && computerSelection == 'paper'
     ) {
        return 'tie';
    } else;
  }; 

  