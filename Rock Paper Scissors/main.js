function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "Scissors";
  } else if (randomNumber === 1) {
    return "Rock";
  } else {
    return "Paper";
  }
}

let humanChoice;
let computerChoice = getComputerChoice();

let humanScore = 0;

let computerScore = 0;

let start = false;
const pS = document.querySelector(".humanSc");
const cS = document.querySelector(".computerSc");
const reset = document.querySelector(".res");

const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");

reset.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;
  cS.textContent = `${computerScore}`;
  pS.textContent = `${humanScore}`;
});

btnRock.addEventListener("click", () => {
  humanChoice = "Rock";
  start = true;
  while (start) {
    if (humanScore + computerScore == 5) {
      console.log(`Your score ${humanScore} vs computer score ${computerScore} If u want to restart click restart button`);
      break;
    }
    computerChoice = getComputerChoice();
    if (humanChoice === "Rock" || humanChoice === "Paper" || humanChoice === "Scissors") {
      if (humanChoice === "Rock" && computerChoice === "Rock") {
        console.log("Draw");
        start = false;
        break;
      } else if (humanChoice === "Rock" && computerChoice === "Paper") {
        console.log("Win for computer");
        computerScore++;
        cS.textContent = `${computerScore}`;
        start = false;
        break;
      } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log("Win For human");
        humanScore++;
        pS.textContent = `${humanScore}`;
        start = false;
        break;
      }
    }
  }
});

btnPaper.addEventListener("click", () => {
  humanChoice = "Paper";
  start = true;
  while (start) {
    if (humanScore + computerScore == 5) {
      console.log(`Your score ${humanScore} vs computer score ${computerScore} If u want to restart click restart button`);
      break;
    }
    computerChoice = getComputerChoice();
    if (humanChoice === "Rock" || humanChoice === "Paper" || humanChoice === "Scissors") {
      if (humanChoice === "Paper" && computerChoice === "Scissors") {
        console.log("Win for computer");
        computerScore++;
        cS.textContent = `${computerScore}`;
        start = false;
        break;
      } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("Win for human");
        humanScore++;
        pS.textContent = `${humanScore}`;
        start = false;
        break;
      } else if (humanChoice === "Paper" && computerChoice === "Paper") {
        console.log("Draw");
        start = false;
        break;
      } else {
        i--;
      }
    }
  }
});

btnScissors.addEventListener("click", () => {
  humanChoice = "Scissors";
  start = true;
  while (start) {
    if (humanScore + computerScore == 5) {
      console.log(`Your score ${humanScore} vs computer score ${computerScore}. If u want to restart click restart button`);
      break;
    }
    computerChoice = getComputerChoice();
    if (humanChoice === "Rock" || humanChoice === "Paper" || humanChoice === "Scissors") {
      if (humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log("Win for human");
        humanScore++;
        pS.textContent = `${humanScore}`;
        start = false;
        break;
      } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        console.log("Win for computer");
        computerScore++;
        cS.textContent = `${computerScore}`;
        start = false;
        break;
      } else if (humanChoice === "Scissors" && computerChoice === "Scissors") {
        console.log("Draw");
        start = false;
        break;
      }
    } else {
      i--;
    }
  }
});
