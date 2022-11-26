// PLAYER INPUT
document.getElementById("btn-rock").addEventListener("click", () => playGame(Moves.ROCK));
document.getElementById("btn-scissors").addEventListener("click", () => playGame(Moves.SCISSORS));
document.getElementById("btn-paper").addEventListener("click", () => playGame(Moves.PAPER));

// not handling edge cases cause noebody cares
function playGame(playerMove) {
  // CLEAR MESSAGES
  clearMessages();

  // PLAYER
  printMessage(`You played: "${playerMove}"`);

  // COMPUTER
  const computerMove = translateMoveFromIntToStr(makeComputerGuess());
  printMessage(`Computer played: "${computerMove}"`);

  // GAME
  determineOutcome(computerMove, playerMove);
}
