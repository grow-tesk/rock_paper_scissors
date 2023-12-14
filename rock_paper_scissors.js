const rPS = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return rPS[Math.floor(Math.random() * rPS.length)];
};

function playRound(playerSelection, computerSelection) {
    if (
        playerSelection == 'rock' && computerSelection == 'scissors' ||
        playerSelection == 'scissors' && computerSelection == 'paper' ||
        playerSelection == 'paper' && computerSelection == 'rock'
    ) {
        return 'You win!'
    } else if (
        playerSelection == 'rock' && computerSelection == 'paper' ||
        playerSelection == 'paper' && computerSelection == 'scissors' ||
        playerSelection == 'scissors' && computerSelection == 'rock'
    ) {
        return 'Sorry, you lose. :('
    } else {
        return 'You\'ve tied.'
    }
  };


  const playerSelection = 'paper'
  const computerSelection = getComputerChoice();

  console.log(playRound(playerSelection, computerSelection));