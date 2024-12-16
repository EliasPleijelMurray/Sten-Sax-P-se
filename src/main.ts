import "./style.css";

const theDiv = document.getElementById("app");

// Alternativen
const choices = ["Sten", "Sax", "Påse"];

// Datorns val
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Spelarens val
const playerChoice = prompt("Välj: Sten, Sax eller Påse");

// Hämta datorns val
const computerChoice = getComputerChoice();

// Visa val
console.log("Spelaren valde:", playerChoice);
console.log("Datorn valde:", computerChoice);

// Bestäm vinnaren
function determineWinner(player: string, computer: string) {
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

// Visa resultatet
if (playerChoice) {
  const result = determineWinner(playerChoice, computerChoice);

  function createHtmlWinner() {
    const myh2 = document.createElement("h1");
    myh2.innerHTML = result;
    if (theDiv) {
      theDiv.appendChild(myh2);
    }
  }

  createHtmlWinner();
}
import "@fortawesome/fontawesome-free/css/all.css";

const app = document.getElementById("app");
const buttonContainer = document.createElement("section")
buttonContainer.className="buttonContainer"

const rockIcon = document.createElement("i")
rockIcon.className ="fa-regular fa-hand-back-fist"
const paperIcon = document.createElement("i")
paperIcon.className ="fa-regular fa-hand"
const scissorsIcon = document.createElement("i")
scissorsIcon.className = "fa-regular fa-hand-scissors"

buttonContainer?.appendChild(rockIcon);
buttonContainer?.appendChild(scissorsIcon);
buttonContainer.appendChild(paperIcon);

app?.appendChild(buttonContainer)
