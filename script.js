let humanScore = 0;
let computerScore = 0;
const getComputerChoice = function () {
  const choice = +Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};
const getHumanChoice = function () {
  let userInput; // = +prompt("Enter Your choice:\n(0: rock, 1: paper, 2: scissors)\n");
  while (true) {
    userInput = +prompt(
      "Enter Your choice:\n(0: rock, 1: paper, 2: scissors)\n"
    );
    if (validateNumber(userInput)) {
      break;
    }
    console.log("Invalid input!");
  }
  switch (Math.floor(userInput)) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};
const validateNumber = function (num) {
  return (
    !isNaN(num) && isFinite(num) && Math.floor(num) >= 0 && Math.floor(num) <= 2
  );
};
const compare = function (human, comp) {
  if (human === comp) {
    // tie
    console.log(`Tie, You and computer both chose ${comp}`);
    return 0;
  } else {
    if (human === "rock") {
      if (comp === "paper") {
        console.log(`You lost! ${comp} beats ${human}`);
        return -1;
      } else {
        console.log(`You won! ${human} beats ${comp}`);
        return 1;
      }
    }
    if (human === "paper") {
      if (comp.length < human.length) {
        // rock
        console.log(`You won! ${human} beats ${comp}`);
        return 1;
      } else {
        // sciccors
        console.log(`You lost! ${comp} beats ${human}`);
        return -1;
      }
    }
    if (human === "scissors") {
      if (comp === "rock") {
        console.log(`You lost! ${comp} beats ${human}`);
        return -1;
      } else {
        console.log(`You won! ${human} beats ${comp}`);
        return 1;
      }
    }
  }
};

const playRound = function () {
  const human = getHumanChoice();
  const comp = getComputerChoice();
  console.log(human, comp);
  const result = compare(human, comp);
  if (result > 0) {
    humanScore++;
  } else if (result < 0) {
    computerScore++;
  }
  console.log(
    `Current score is ${humanScore} : ${computerScore}\n(You : Computer)`
  );
};

const game = function (roundCount) {
  for (let i = 0; i < roundCount; i++) {
    playRound();
  }
  if (humanScore > computerScore) {
    console.log(`You beat the computer! Congratulations!`);
  } else if (humanScore < computerScore) {
    console.log(`Computer beat you! What a loser!`);
  } else {
    console.log(`Tie! None of you is a winner.`);
  }
};
game(5);
