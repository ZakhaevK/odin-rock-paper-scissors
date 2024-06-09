// Establish reference to DOM elements for UI purposes.
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  console.log(button.id);
  button.addEventListener("click", () => {
    console.log(button.id);
    playRound(button.id, getComputerChoice());
  })
})

const resultDiv = document.querySelector(".result-div");

function updateResult(text) {
  const result = document.createElement("p");
  const score = document.createElement("p");
  result.textContent = `${text}`;
  score.textContent = `Current Score is You: ${humanScore} Computer: ${computerScore}`;
  resultDiv.appendChild(result);
  resultDiv.appendChild(score)
}

const newGameButton = document.createElement("button");
newGameButton.textContent = "New Game";
newGameButton.addEventListener("click", () => {
  newGame();
});

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
  updateResult(query)

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
    updateResult(`Both players chose ${humanChoice}, no score!`)
  }

  if (humanChoice == "rock") {
    if (computerChoice == "paper") {
      computerScore++;
      updateResult("Paper beats rock, you lose the round!")
    } else if (computerChoice == "scissors") {
      humanScore++;
      updateResult("Rock beats scissors, you win the round!")
    }
  }

  if (humanChoice == "paper") {
    if (computerChoice == "rock") {
      humanScore++
      updateResult("Paper beats rock, you win the round!")
    } else if (computerChoice == "scissors") {
      computerScore++;
      updateResult("Scissors beats paper, you lose the round!")
      
    }
  }

  if (humanChoice == "scissors") {
    if (computerChoice == "rock") {
      computerScore++;
      updateResult("Rock beats scissors, you lose the round!");
    } else if (computerChoice == "paper") {
      humanScore++;
      updateResult("Scissors beats paper, you win the round!");
    }
  }
  checkScore();
}

let humanScore = 0;
let computerScore = 0;

function checkScore() {
  if (humanScore > 4) {
    const winner = document.createElement("p");
    winner.textContent = `The human player wins the match!`;
    resultDiv.appendChild(winner);
    resultDiv.appendChild(newGameButton);
    disableButtons()
  }

  if (computerScore > 4) {
    const winner = document.createElement("p");
    winner.textContent = `The computer player wins the match!`;
    resultDiv.appendChild(winner);
    resultDiv.appendChild(newGameButton);
    toggleButtons()
    }
    
  }

function newGame() {
  humanScore = 0;
  computerScore = 0;
  resultDiv.replaceChildren("A new game has begun");
  toggleButtons()
}

function toggleButtons() {
    buttons.forEach((button) => {
      if (!button.hasAttribute("disabled")) {
        button.setAttribute("disabled", true);
      } else {
      button.removeAttribute("disabled");
    }
  })
}