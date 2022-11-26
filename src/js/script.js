// not handling edge cases cause noebody cares

// PLAYER
const playerInput = prompt("Pick your move: 1: rock, 2: paper, 3: scissors");
const playerMove = translateMoveFromIntToStr(Number(playerInput));
printMessage(`You played: "${playerMove}"`);

// COMPUTER
const computerMove = translateMoveFromIntToStr(makeComputerGuess());
printMessage(`Computer played: "${computerMove}"`);

// GAME
determineOutcome(computerMove, playerMove);
