/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

function diceRoll() {
  if(gamePlaying)
  {
  // 1. Random number
  var randomDice = Math.floor(Math.random()* 6 + 1);
  // 2. Set icon visible and display number on dice icon
  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = "block";
  diceDOM.src = 'dice-'+randomDice+'.png';

  // 3. Update current score or reset it if 1
  if(randomDice == 1)
  {
    roundScore = 0;
    document.querySelector('#current-'+activePlayer).textContent = roundScore;
    alert('Player'+(activePlayer +1)+' lost the round');
    passTurn();
  }
  else
  {
    roundScore += randomDice;
    document.querySelector('#current-'+activePlayer).textContent = roundScore;
    
  }
}
}

function passTurn() {
  var player0 = document.querySelector('.player-0-panel');
  var player1 = document.querySelector('.player-1-panel');
  roundScore = 0;
  if(activePlayer == 0 ? activePlayer = 1 : activePlayer = 0);
  toggleActive(player0);
  toggleActive(player1);
  document.querySelector('.dice').style.display = 'none';

  

}

function toggleActive(player)
  {
    player.classList.toggle('active');
  }


function savePoints() {
  if(gamePlaying)
  {

  playerScore = document.querySelector('#score-'+activePlayer);
  scores[activePlayer] += roundScore;
  playerScore.textContent = scores[activePlayer];
  checkWin();
  refreshCurrentPoints();
  }
  

}

function refreshCurrentPoints(){
  roundScore = 0;
  document.querySelector('#current-'+activePlayer).textContent = roundScore;
}

function checkWin() {
  var goal = 100;
  if(scores[activePlayer] >= goal)
  {
    document.querySelector('.player-'+activePlayer+'-panel').classList.toggle('winner');
    document.getElementById('name-'+activePlayer).textContent = 'WINNER';
    gamePlaying = false;
    document.querySelector('.dice').style.display = 'none';
  }
  else
  {
    passTurn();
  }
  
  
}

function removeWinner()
{
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  
}

function newGame()
{
  document.querySelector('.dice').style.display = 'none';
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'PLAYER 1';
  document.getElementById('name-1').textContent = 'PLAYER 2';

  removeWinner();


  scores = [0,0];
  roundScore = 0;
  gamePlaying = true;
  passTurn();
}


var scores, roundScore, activePlayer,gamePlaying;

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
scores=[0,0];
roundScore = 0;
activePlayer = 0;
gamePlaying = true;
document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click', diceRoll);
document.querySelector('.btn-hold').addEventListener('click',savePoints);
document.querySelector('.btn-new').addEventListener('click', newGame);

