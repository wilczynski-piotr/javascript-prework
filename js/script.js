{
  function playGame(playerInput){

  for( let i = 0; i < 1000; i++ ){

    clearMessages()
    const random50proc = Math.random(),
          riggedGame75 = Math.random();

    let randomNumber;

    if (riggedGame75 <  0.75 && playerInput == 1){
      randomNumber = 3;
    } else if (riggedGame75 <  0.75 && playerInput == 2) {
      randomNumber = 1;
    } else if (riggedGame75 <  0.75 && playerInput == 3) {
      randomNumber = 2;
    } else if (riggedGame75 =>  0.75 && playerInput == 1) {
      randomNumber = Math.floor(Math.random() * 2 + 1)
    } else if (riggedGame75 =>  0.75 && playerInput == 2) {
      randomNumber = Math.floor(Math.random() * 2 + 2)
    } else if (riggedGame75 =>  0.75 && playerInput == 3) {
        if (random50proc >= 0.5) {
          randomNumber = 3;
        } else if (random50proc < 0.5) {
          randomNumber = 1;
        }
    }

    const argComputerMove = getMoveName(randomNumber),
          argPlayerMove = getMoveName(playerInput),
          gameResult = displayResults(argComputerMove, argPlayerMove);

    if (gameResult == 1){
      playerScore++;
    } else if (gameResult == -1){
      compScore++;
    } else if (gameResult == 0) {
      tieScore++;
    }

    printMessage('Wynik rozgrywki to: ' + playerScore + '-' + compScore);
    printMessage('Ilość remisów: ' + tieScore);
    printMessage('Runda nr: ' + roundNumber++);
    }
  }

  const getMoveName = function(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else if (argMoveId == 2){
      return 'papier';
    } else if (argMoveId == 3){
      return 'nożyce';
    }
  }

  const displayResults = function(argComputerMove, argPlayerMove){
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

  document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  });
  document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
  });
  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
  });

  let playerScore = 0, compScore = 0, tieScore = 0, roundNumber = 1;
  }
