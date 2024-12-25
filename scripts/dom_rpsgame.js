let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElements();

function rpsGame(playerSelection) {
  computerSelection = randomComputerMove();
  let result = "";

  if (playerSelection === "Rock") {
    if (computerSelection === "Rock") {
      result = "Tie";
    } else if (computerSelection === "Paper") {
      result = "You Lose";
    } else if (computerSelection === "Scissors") {
      result = "You Win";
    }
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Paper") {
      result = "Tie";
    } else if (computerSelection === "Rock") {
      result = "You Win";
    } else if (computerSelection === "Scissors") {
      result = "You Lose";
    }
  } else if (playerSelection === "Scissors") {
    if (computerSelection === "Scissors") {
      result = "Tie";
    } else if (computerSelection === "Rock") {
      result = "You Lose";
    } else if (computerSelection === "Paper") {
      result = "You Win";
    }
  }

  if (result === "You Win") {
    score.wins++;
  } else if (result === "You Lose") {
    score.losses++;
  } else if (result === "Tie") {
    score.ties++;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElements();

  document.querySelector(".js-result").innerHTML = `${result}.`;

  document.querySelector(".js-moves").innerHTML = `
    You<img class="image" src="../dice-images/rpsgame-emo/${playerSelection}-emoji.png" /> Computer
  <img class="image" src="../dice-images/rpsgame-emo/${computerSelection}-emoji.png" />
    `;
}

function updateScoreElements() {
  document.querySelector(
    ".js-button"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function randomComputerMove() {
  randomNumber = Math.random();

  let computerSelection = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerSelection = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerSelection = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerSelection = "Scissors";
  }
  return computerSelection;
}
