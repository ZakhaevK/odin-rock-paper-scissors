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