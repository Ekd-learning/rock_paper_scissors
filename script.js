const rock_btn = document.createElement("button");
rock_btn.setAttribute("id", "rock");
rock_btn.textContent = "Rock";
const paper_btn = document.createElement("button");
paper_btn.setAttribute("id", "paper");
paper_btn.textContent = "Paper";
const scissors_btn = document.createElement("button");
scissors_btn.setAttribute("id", "scissors");
scissors_btn.textContent = "Scissors";
document.body.appendChild(rock_btn, paper_btn, scissors_btn);
document.body.appendChild(paper_btn);
document.body.appendChild(scissors_btn);
const result_container = document.createElement("div");
result_container.setAttribute("id", "result");
document.body.appendChild(document.createElement("br"));
document.body.appendChild(result_container);

//rock_btn.addEventListener("onClick", game());

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

const playRound = function (humanInput) {
  const human = humanInput; //getHumanChoice();
  const comp = getComputerChoice();
  console.log(human, comp);
  const result = compare(human, comp);
  console.log("compare result: ", result);
  if (result > 0) {
    humanScore++;
  } else if (result < 0) {
    computerScore++;
  }
  console.log(
    `Current score is ${humanScore} : ${computerScore}\n(You : Computer)`
  );
  let color;
  let res_message;
  if (result < 0) {
    color = "red";
    res_message = "Computer beat you! What a loser!";
  }
  if (result > 0) {
    color = "green";
    res_message = "You beat the computer! Congratulations!";
  }
  if (result === 0) {
    color = "white";
    res_message = "Tie! None of you is a winner.";
  }
  displayResults(
    res_message +
      "\n" +
      `Current score is ${humanScore} : ${computerScore}\n(You : Computer)`,
    color
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
//game(5);

const displayResults = function (text, color) {
  result_container.style.backgroundColor = "black";
  result_container.style.color = color;
  result_container.textContent = "";
  result_container.textContent = text;
};

rock_btn.addEventListener("click", () => playRound(rock_btn.id));
paper_btn.addEventListener("click", () => playRound(paper_btn.id));
scissors_btn.addEventListener("click", () => playRound(scissors_btn.id));
