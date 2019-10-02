function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  } else if (argMoveId == 2){
      return 'papier';
  } else if (argMoveId == 3){
      return 'nożyce';
  }

  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove  = getMoveName(randomNumber);

// printMessage('Mój ruch to: ' + argComputerMove);

/*
if(randomNumber == 1){
  computerMove = 'kamień';
} else if (randomNumber == 2){
    computerMove = 'nożyce';
} else if (randomNumber == 3){
    computerMove = 'papier';
}
*/
// druga część -- wprowadzenie informacji od gracza

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = getMoveName(playerInput);

// printMessage('Twój ruch to: ' + argPlayerMove);

/*
if(playerInput == '1'){
  playerMove = 'kamień';
} else if (playerInput == '2') {
    playerMove = 'nożyce';
} else if (playerInput == '3') {
    playerMove = 'papier';
}
*/

// wyniki

function displayResults(argComputerMove, argPlayerMove){
  console.log('moves:', argComputerMove, argPlayerMove);
  printMessage('Wybrałem ' + argComputerMove + ', a Ty ' + argPlayerMove + '.');

  if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage('Wygrywasz!');
  } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
      printMessage('Przegrywasz ;-p');
  } else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
      printMessage('Mamy remis!');
  } else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
      printMessage('Mamy remis!');
  } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
      printMessage('Wygrywasz!');
  } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
      printMessage('Przegrywasz ;-p');
  } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
      printMessage('Przegrywasz ;-p');
  } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
      printMessage('Mamy remis!');
  } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
      printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'nieznany ruch') {
      printMessage('Wybierz za pomocą liczby z przedziału 1-3!');
  }
}
displayResults(argComputerMove, argPlayerMove);
