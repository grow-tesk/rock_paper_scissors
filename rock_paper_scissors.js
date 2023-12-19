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

  function game(playerScore, computerScore) {

    if (playRound(playerSelection, computerSelection) == 'You win! You get a point.') {
      for (playerScore = 1; playerScore < 3; playerScore++) {
        userInput = prompt(`You win this round. You have ${playerScore} points, and the computer has ${computerScore} points.`);
      };
    } else if (playRound(playerSelection, computerSelection) == 'The computer won this round. It get\'s a point.') {
        return computerScore + 1;
    } else {
        return "You tied. Neither gets a point.";
    };

    
  };

  let userInput = prompt("Let's play Rock Paper Scissors.");
  
  const playerSelection = userInput.toLowerCase();
  const computerSelection = getComputerChoice();

  console.log(playRound(playerSelection, computerSelection));

  