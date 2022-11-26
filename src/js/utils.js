function printMessage(msg) {
  let h1 = document.createElement("h1");
  h1.innerText = msg;
  document.getElementById("messages").appendChild(h1);
}

function clearMessages() {
  document.getElementById("messages").innerHTML = "";
}

function makeComputerGuess() {
  return Math.floor(Math.random() * 3 + 1);
}

const Moves = {
  ROCK: "rock",
  SCISSORS: "scissors",
  PAPER: "paper",
};

function translateMoveFromIntToStr(intMove) {
  switch (intMove) {
    case 1:
      return Moves.ROCK;

    case 2:
      return Moves.SCISSORS;

    case 3:
      return Moves.PAPER;
  }
}

function determineOutcome(computerMove, playerMove) {
  const cm = computerMove;
  const pm = playerMove;

  // tie
  if (pm === cm) tie();
  // computer wins
  else if (
    (cm === Moves.ROCK && pm === Moves.SCISSORS) ||
    (cm === Moves.SCISSORS && pm === Moves.PAPER) ||
    (cm === Moves.PAPER && pm === Moves.ROCK)
  )
    computerWins();
  // player wins
  else playerWins();
}

function tie() {
  printMessage("Tie!");
}

function playerWins() {
  printMessage("You won!");
}

function computerWins() {
  printMessage("computer won :(");
}
