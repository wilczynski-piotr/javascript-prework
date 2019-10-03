function playGame(playerInput){

  clearMessages()

  function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else if (argMoveId == 2){
        return 'papier';
    } else if (argMoveId == 3){
        return 'nożyce';
    }
  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  let argComputerMove = getMoveName(randomNumber);

  let argPlayerMove = getMoveName(playerInput);

// wyniki

  function displayResults(argComputerMove, argPlayerMove){
    console.log('moves:', argComputerMove, argPlayerMove);
    printMessage('Wybrałem ' + argComputerMove + ', a Ty ' + argPlayerMove + '.');

    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      printMessage('Wygrywasz!');
      return 1;
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
        printMessage('Przegrywasz ;-p');
        return -1;
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
        printMessage('Mamy remis!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
        printMessage('Mamy remis!');
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
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
        printMessage('Wygrywasz!');
        return 1;
    } else if (argPlayerMove == 'nieznany ruch') {
        printMessage('Wybierz za pomocą liczby z przedziału 1-3!');
    }
  }
// wyrzucenie wynikow z funcji displayresults i playGame
  let gameResult = displayResults(argComputerMove, argPlayerMove);
  console.log('result:', gameResult);
  if(gameResult == 1){
      return 1;
  } else if (gameResult == -1) {
      return -1;
  } else {
      return 0;
  }
}

document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
/*
  let but1Result = playGame(1);
  if(but1Result == 1){
      return 1;
  } else if (but1Result == -1) {
      return -1;
  } else {
      return 0;
  }
  // próba połączenia wyrzucenia wyniku funcji z nacisnieciem przycisku
*/
});


document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});

// Wyniki wielu gier
