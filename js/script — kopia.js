function playGame(playerInput){

  clearMessages()

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  let argComputerMove = getMoveName(randomNumber);

  let argPlayerMove = getMoveName(playerInput);

// nowe porządki

  let gameResult = displayResults(argComputerMove, argPlayerMove);

  if (gameResult == 1){
    playerScore++;
  } else if (gameResult == -1){
    compScore++;
  } else if (gameResult == 0) {
    tieScore++;
  }
  let roundNumber = tieScore + compScore + playerScore;

  printMessage('Wynik rozgrywki to: ' + playerScore + '-' + compScore);
  printMessage('Ilość remisów: ' + tieScore);
  printMessage('Runda nr: ' + roundNumber);

}

function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  } else if (argMoveId == 2){
      return 'papier';
  } else if (argMoveId == 3){
      return 'nożyce';
  }
}
function displayResults(argComputerMove, argPlayerMove) {
if (argComputerMove == 'kamień' && argPlayerMove == 'papier'){
return 'Ty wygrywasz!';
}
else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
return 'Ty przegrywasz!';
}
else if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
return 'Ty przegrywasz!';
}
else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
return 'Ty wygrywasz!';
}
else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
return 'Ty przegrywasz!';
}
else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
return 'Ty wygrywasz!';
}
else if (argComputerMove == argPlayerMove){
return 'remis';
}
else if (argPlayerMove == 'nieznany ruch'){
return 'błędny ruch';
}
}
let wynikPomoc = displayResults(argComputerMove, argPlayerMove);
printMessage('wynikPomoc' + wynikPomoc)

/*
function displayResults(argComputerMove, argPlayerMove){
  console.log('moves:', argComputerMove, argPlayerMove);
  printMessage('Wybrałem ' + argComputerMove + ', a Ty ' + argPlayerMove + '.');

  if (argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage('Wygrywasz!');
    return 1;
  } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
      printMessage('Przegrywasz ;-p');
      return -1;
  } else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
      printMessage('Mamy remis!');
      return 0;
  } else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
      printMessage('Mamy remis!');
      return 0;
  } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
      printMessage('Wygrywasz!');
      return 1;
  } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
      printMessage('Przegrywasz ;-p');
      return -1;
  } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
      printMessage('Przegrywasz ;-p');
      return -1;
  } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
      printMessage('Mamy remis!');
      return 0;
  } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
      printMessage('Wygrywasz!');
      return 1;
  } else if (argPlayerMove == 'nieznany ruch') {
      printMessage('Wybierz za pomocą liczby z przedziału 1-3!');
  }
}
*/
document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});

let playerScore = 0;
let compScore = 0;
let tieScore = 0;
