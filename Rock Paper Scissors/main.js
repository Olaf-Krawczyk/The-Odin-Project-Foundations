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

for (let i = 0; i <= 4; i++) {
  humanChoice = prompt("Wpisz odpowiedz");
  computerChoice = getComputerChoice();
  if (humanChoice === "Rock" || humanChoice === "Paper" || humanChoice === "Scissors") {
    if (humanChoice === "Rock" && computerChoice === "Rock") {
      console.log("Draw");
    } else if (humanChoice === "Rock" && computerChoice === "Paper") {
      console.log("Win for computer");
      computerScore++;
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
      console.log("Win For human");
      humanScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
      console.log("Win for computer");
      computerScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
      console.log("Win for human");
      humanScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Paper") {
      console.log("Draw");
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
      console.log("Win for human");
      humanScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
      console.log("Win for computer");
      computerScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Scissors") {
      console.log("Draw");
    }
  } else {
    humanChoice = prompt("Wrong, try again");
    i--;
  }
}

console.log(`Your score ${humanScore} vs Computer score ${computerScore}`);
