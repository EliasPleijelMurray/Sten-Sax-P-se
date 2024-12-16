import "./style.css";
import "@fortawesome/fontawesome-free/css/all.css";

const theDiv = document.getElementById("app");

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

// Funktion för att bestämma vinnaren
function determineWinner(player: string, computer: string): string {
  if (player === computer) {
    return "Oavgjort!";
  } else if (
    (player === "Sten" && computer === "Sax") ||
    (player === "Sax" && computer === "Påse") ||
    (player === "Påse" && computer === "Sten")
  ) {
    return "Du vinner!";
  } else {
    return "Datorn vinner!";
  }
}

// Funktion för att visa resultatet i HTML
function createHtmlWinner(result: string) {
  // Rensa tidigare resultat
  const existingResult = document.querySelector("h1");
  if (existingResult) {
    existingResult.remove();
  }

  const resultElement = document.createElement("h1");
  resultElement.innerHTML = result;
  theDiv?.appendChild(resultElement);
}

// Klickhändelser för spelval
rockIcon.addEventListener("click", () => {
  const playerChoice = "Sten";
  const computerChoice = getComputerChoice();
  const result = determineWinner(playerChoice, computerChoice);
  createHtmlWinner(result);
});

scissorsIcon.addEventListener("click", () => {
  const playerChoice = "Sax";
  const computerChoice = getComputerChoice();
  const result = determineWinner(playerChoice, computerChoice);
  createHtmlWinner(result);
});

paperIcon.addEventListener("click", () => {
  const playerChoice = "Påse";
  const computerChoice = getComputerChoice();
  const result = determineWinner(playerChoice, computerChoice);
  createHtmlWinner(result);
});
