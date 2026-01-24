
let winingScore = document.getElementById('winningRange');
let startGameBtn = document.getElementById('startGameBtn');

let playerChoiceDisplay = document.getElementById('player-choice-display');
let computerChoiceDisplay = document.getElementById('computer-choice-display');

let playerScoreDisplay = document.getElementById('player-score-display');
let computerScoreDisplay = document.getElementById('computer-score-display');

let roundWinnerDisplay = document.getElementById('round-winner-display');
let winningScoreDisplay = document.getElementById('winning-score-display');

let roundWinner = document.querySelector('.game-winner');
roundWinner.style.display = 'none';
let gameWinnerDisplay = document.getElementById('game-winner-display');

let rockBtn = document.getElementById('rock');
let paperBtn = document.getElementById('paper');
let scissorsBtn = document.getElementById('scissors');

let playerScore = 0;
let computerScore = 0;
let winningScoreValue = 3;

winingScore.addEventListener('change', function() {
  winningScoreValue = parseInt(this.value);
  winningScoreDisplay.textContent = winningScoreValue;
  if (isNaN(winningScoreValue) || winningScoreValue < 2) {
    winningScoreValue = 3; // Default value if input is invalid
    winningScoreDisplay.textContent = winningScoreValue;
  }
  console.log("Winning score set to: " + winningScoreValue);
});

if (isNaN(winningScoreValue) || winningScoreValue < 2 || winningScoreValue > 10) {
  winningScoreValue = 3;
  winningScoreDisplay.textContent = winningScoreValue;
}

let inputContainer = document.querySelector('.input-container');
let sectionDisplay = document.querySelector('.results-container');
sectionDisplay.style.display = 'none';


startGameBtn.addEventListener('click', function() {
  inputContainer.style.display = 'none';
  sectionDisplay.style.display = 'block';
});

let choices = ['Rock', 'Paper', 'Scissors'];
let gameWinnerMessage = document.getElementById('game-winner-message');

function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

function playRound(playerSelection) {
  let computerSelection = getComputerChoice();
  playerChoiceDisplay.textContent = playerSelection;
  computerChoiceDisplay.textContent = computerSelection;

  if (playerSelection === computerSelection) {
    roundWinnerDisplay.textContent = "It's a tie!";
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    playerScore++;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    roundWinnerDisplay.textContent = "You win this round!";
    gameWinnerMessage.textContent = "🏆 You " + playerScore + " - " + computerScore + " 💔 Computer";
  } else {
    computerScore++;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.innerText = computerScore;
    roundWinnerDisplay.textContent = "Computer wins this round!";
    gameWinnerMessage.textContent = "🏆 Computer " + computerScore + " - " + playerScore + " 💔 You";
  }

  if (playerScore >= winningScoreValue) {
    gameWinnerDisplay.textContent = "You win the game!";
    sectionDisplay.style.display = 'none';
    roundWinner.style.display = 'block';
  } else if (computerScore >= winningScoreValue) {
    gameWinnerDisplay.textContent = "Computer wins the game!";
    sectionDisplay.style.display = 'none';
    roundWinner.style.display = 'block';
  }

};

rockBtn.addEventListener('click', function() {
  playRound('Rock');
});
paperBtn.addEventListener('click', function() {
  playRound('Paper');
});
scissorsBtn.addEventListener('click', function() {
  playRound('Scissors');
});


let resetGameBtn = document.getElementById('resetGameBtn');
resetGameBtn.addEventListener('click', function() {
  inputContainer.style.display = 'flex';
  sectionDisplay.style.display = 'none';
  roundWinner.style.display = 'none';
  playerScore = 0;
  computerScore = 0;
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
  roundWinnerDisplay.textContent = "No rounds played yet.";
  gameWinnerDisplay.textContent = "No winner yet.";
  playerChoiceDisplay.textContent = "None";
  computerChoiceDisplay.textContent = "None";

  });