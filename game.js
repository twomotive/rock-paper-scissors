let playerScore = 0;
let computerScore = 0;
const scoreText = document.querySelector("#scoreboard");
const resultText = document.querySelector("#winner");

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  switch (randomNumber) {
    case 1:
      return "rock";

    case 2:
      return "paper";

    case 3:
      return "scissors";

    default:
      return console.log("Geçersiz sayi");
  }
}

function determineWinner(userChoice, computerChoice) {
  if (
    userChoice !== "rock" &&
    userChoice !== "paper" &&
    userChoice !== "scissors"
  ) {
    return "You entered an invalid choice!";
  }

  if (userChoice === computerChoice) {
    return "The game is a tie!";
  }

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      computerScore++;
      return "Computer won!";
    } else {
      playerScore++;
      return "You won!";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      computerScore++;
      return "Computer won!";
    } else {
      playerScore++;
      return "You won!";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      computerScore++;
      return "Computer won!";
    } else {
      playerScore++;
      return "You won!";
    }
  }
}

function updateScore(playerScore, computerScore) {
  if (playerScore === 5 && computerScore < 5) {
    resultText.textContent = "You won the game!";
  } else if (computerScore === 5 && playerScore < 5) {
    resultText.textContent = "Computer won the game!";
  } else {
    resultText.textContent = "";
  }
  scoreText.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
}

function playGame(e) {
  const userChoice = e;
  const computerChoice = getComputerChoice();
  determineWinner(userChoice, computerChoice);
  updateScore(playerScore, computerScore);
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  scoreText.textContent = "Begin the game!";
  resultText.textContent = "";
}

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    userChoice = button.id;

    return playGame(userChoice);
  });
});

const resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", () => {
  resetGame();
});
