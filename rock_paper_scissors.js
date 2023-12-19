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
        return "You win! You get a point.";
    } else if (
        playerSelection == 'rock' && computerSelection == 'paper' ||
        playerSelection == 'paper' && computerSelection == 'scissors' ||
        playerSelection == 'scissors' && computerSelection == 'rock'
    ) {
        return "The computer won this round. It get's a point.";
    } else {
        return "You tied. Neither gets a point."
  };
};

  function game() {
    if (playRound(playerSelection, computerSelection) == 'You win! You get a point.') {
        return 'hello.'
    }
  };

  const playerSelection = 'rock'
  const computerSelection = getComputerChoice();

  console.log(playRound(playerSelection, computerSelection));

  