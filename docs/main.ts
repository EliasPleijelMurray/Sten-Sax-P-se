import ".style.css";
import "@fortawesome/fontawesome-free/css/all.css";

// Huvudelementet
const theDiv = document.getElementById("app");

//Spelinstruktioner
const instructionsContainer = document.createElement("section");
instructionsContainer.className = "instructionsContainer";
theDiv?.appendChild(instructionsContainer);

const instructionsHead = document.createElement("h3");
const instructionsText = document.createElement("p");
instructionsHead.innerHTML = "Så spelar du";
instructionsText.innerHTML =
  "Försök att slå datorn! Klicka på ikonerna för att välja sten, sax eller påse";
instructionsContainer.appendChild(instructionsHead);
instructionsContainer.appendChild(instructionsText);

// Skapa sektion för knappar
const app = document.getElementById("app");
const buttonContainer = document.createElement("section");
buttonContainer.className = "buttonContainer";

// Skapa ikoner för val
const rockIcon = document.createElement("i");
rockIcon.className = "fa-regular fa-hand-back-fist";
const paperIcon = document.createElement("i");
paperIcon.className = "fa-regular fa-hand";
const scissorsIcon = document.createElement("i");
scissorsIcon.className = "fa-regular fa-hand-scissors";

// Lägg till knappar i container
buttonContainer.appendChild(rockIcon);
buttonContainer.appendChild(scissorsIcon);
buttonContainer.appendChild(paperIcon);
app?.appendChild(buttonContainer);

// Alternativen
const choices = ["Sten", "Sax", "Påse"];

// Funktion för datorns val
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

let computerScore = 0;
let playerScore = 0;
let drawScore = 0;

const scoreP = document.createElement("p");
scoreP.className = "scoreP";
const scorePComputer = document.createElement("p");
scorePComputer.className = "scoreP";
const drawP = document.createElement("p");
drawP.className = "scoreP";

// Funktion för att bestämma vinnaren
function determineWinner(player: string, computer: string): string {
  if (player === computer) {
    drawScore++;
    drawP.innerHTML =
      "Det har blivit oavgjort: " + drawScore.toString() + " gånger";
    theDiv?.appendChild(drawP);
    return "Oavgjort!";
  } else if (
    (player === "Sten" && computer === "Sax") ||
    (player === "Sax" && computer === "Påse") ||
    (player === "Påse" && computer === "Sten")
  ) {
    playerScore++;
    scoreP.innerHTML = "Du har vunnit: " + playerScore.toString() + " gånger";
    theDiv?.appendChild(scoreP);
    return "Du vann!";
  } else {
    computerScore++;
    scorePComputer.innerHTML =
      "Datorn har vunnit: " + computerScore.toString() + " gånger";
    theDiv?.appendChild(scorePComputer);
    return "Datorn vann!";
  }
}

// Funktion för att visa resultatet i HTML
function createHtmlWinner(result: string, player: string, computer: string) {
  // Rensa tidigare resultat
  const existingResult = document.querySelector(".result-container");
  if (existingResult) {
    existingResult.remove();
  }

  // Skapa en container för resultaten
  const resultContainer = document.createElement("div");
  resultContainer.className = "result-container";

  // Spelarens val
  const playerChoiceElement = document.createElement("p");
  playerChoiceElement.innerHTML = `Du valde ${player}`;
  resultContainer.appendChild(playerChoiceElement);

  // Datorns val
  const computerChoiceElement = document.createElement("p");
  computerChoiceElement.innerHTML = `Datorn valde ${computer}`;
  resultContainer.appendChild(computerChoiceElement);

  // Resultatet
  const resultElement = document.createElement("h2");
  resultElement.innerHTML = result;

  if (result === "Du vann!") {
    resultElement.className = "youWin";
  } else if (result === "Datorn vann!") {
    resultElement.className = "computerWins";
  } else {
    resultElement.className = "draw";
  }
  resultContainer.appendChild(resultElement);

  // Lägg till i DOM:en
  theDiv?.appendChild(resultContainer);
}

// Klickhändelser för spelval
rockIcon.addEventListener("click", () => {
  const playerChoice = "Sten";
  const computerChoice = getComputerChoice();
  const result = determineWinner(playerChoice, computerChoice);
  createHtmlWinner(result, playerChoice, computerChoice);
});

scissorsIcon.addEventListener("click", () => {
  const playerChoice = "Sax";
  const computerChoice = getComputerChoice();
  const result = determineWinner(playerChoice, computerChoice);
  createHtmlWinner(result, playerChoice, computerChoice);
});

paperIcon.addEventListener("click", () => {
  const playerChoice = "Påse";
  const computerChoice = getComputerChoice();
  const result = determineWinner(playerChoice, computerChoice);
  createHtmlWinner(result, playerChoice, computerChoice);
});
