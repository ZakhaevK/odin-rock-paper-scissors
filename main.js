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