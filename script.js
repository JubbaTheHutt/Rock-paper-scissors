// let playerChoice = document.querySelectorAll(".players-choice .game-choice");
// let computerChoice = document.querySelectorAll(
//   ".computers-choice .game-choice"
// );

// function randomInteger() {
//   let computerRandom = Math.floor(Math.random() * 3);
//   return computerRandom;
// }
let player = document.getElementById("player");
let computer = document.getElementById("computer");
let weapon = "";
let computerRandom = 0;
let winCount = 0;
let loseCount = 0;

rock.addEventListener("click", function () {
  weapon = "rock";
  computerRandom = Math.floor(Math.random() * 3);
  conditions();
});

scissors.addEventListener("click", function () {
  weapon = "scissors";
  computerRandom = Math.floor(Math.random() * 3);
  conditions();
});

paper.addEventListener("click", function () {
  weapon = "paper";
  computerRandom = Math.floor(Math.random() * 3);
  conditions();
});

resetButton.addEventListener("click", function () {
  winCount = 0;
  computer.innerHTML = 0;
  loseCount = 0;
  player.innerHTML = 0;
});

function conditions() {
  if (
    (weapon == "rock" && computerRandom == 0) ||
    (weapon == "paper" && computerRandom == 2) ||
    (weapon == "scissors" && computerRandom == 1)
  )
    alert("Draw");
  else if (
    (weapon == "rock" && computerRandom == 2) ||
    (weapon == "scissors" && computerRandom == 0) ||
    (weapon == "paper" && computerRandom == 1)
  ) {
    alert("You lose");
    loseCount++;
    computer.innerHTML = loseCount;
  } else {
    alert("win");
    winCount++;
    player.innerHTML = winCount;
  }
}
