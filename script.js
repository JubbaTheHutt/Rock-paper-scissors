// let playerChoice = document.querySelectorAll(".players-choice .game-choice");
let computerChoice = document.querySelectorAll(
  ".computers-choice .game-choice"
);

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
  toRight(rock);
  toLeft(computerRandom);
  conditions();
});

scissors.addEventListener("click", function () {
  weapon = "scissors";
  computerRandom = Math.floor(Math.random() * 3);
  toRight(scissors);
  toLeft(computerRandom);
  conditions();
});

paper.addEventListener("click", function () {
  weapon = "paper";
  computerRandom = Math.floor(Math.random() * 3);
  toRight(paper);
  toLeft(computerRandom);
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

function toRight(name) {
  name.style.transform = "translate(300px)";
  setTimeout(() => (name.style.transform = "translate(0px)"), 2000);
}

function toLeft(num) {
  if (num == 0) {
    computerChoice[0].style.transform = "translate(-300px)";
    setTimeout(
      () => (computerChoice[0].style.transform = "translate(0px)"),
      2000
    );
  }
  if (num == 1) {
    computerChoice[1].style.transform = "translate(-300px)";
    setTimeout(
      () => (computerChoice[1].style.transform = "translate(0px)"),
      2000
    );
  }
  if (num == 2) {
    computerChoice[2].style.transform = "translate(-300px)";
    setTimeout(
      () => (computerChoice[2].style.transform = "translate(0px)"),
      2000
    );
  }
}
