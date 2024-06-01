// Generates a random computer choice of rock, paper, or scissors.
function getComputerChoice() {
  const num = Math.random();
  let choice;

  if (num <= 0.33) {
    choice = "rock";
  } else if (num <= 0.66) {
    choice = "paper";
  } else {
    choice = "scissors";
  }
  return choice;
}

function getHumanChoice() {
  let query = prompt("Rock, paper, or scissors?").toLowerCase();
  console.log(query);

  if (query == "r" || query == "rock") {
    return "rock";
  } else if (query == "p" || query == "paper") {
    return "paper";
  } else if (query == "s" || query == "scissors") {
    return "scissors";
  } else {
    console.log(`Invalid result "${query}", try again`);
    return 0;
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    console.log(`Both players chose ${humanChoice}, no score!`);
  }

  if (humanChoice == "rock") {
    if (computerChoice == "paper") {
      console.log("Paper beats rock, you lose!");
      computerScore++;
    } else if (computerChoice == "scissors") {
      console.log("Rock beats scissors, you win!");
      humanScore++;
    }
  }

  if (humanChoice == "paper") {
    if (computerChoice == "rock") {
      console.log("Paper beats rock, you win!");
      humanScore++
    } else if (computerChoice == "scissors") {
      console.log("Scissors beats paper, you lose!");
      computerScore++;
    }
  }

  if (humanChoice == "scissors") {
    if (computerChoice == "rock") {
      console.log("Rock beats scissors, you lose!");
      computerScore++
    } else if (computerChoice == "paper") {
      console.log("Scissors beats paper, you win!");
      humanScore++;
    }
  }
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
  let round = 1
  // Reset to 0 if adding functionality for replay
  humanScore = 0;
  computerScore = 0;
  

  while (round < 6) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    round++;
    console.log(`Current score is Human: ${humanScore} | Computer ${computerScore}`);
  }
  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else {
    console.log("You lost the game!");
  }


}

playGame();