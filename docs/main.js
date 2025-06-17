"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Huvudelementet
var theDiv = document.getElementById("app");
//Spelinstruktioner
var instructionsContainer = document.createElement("section");
instructionsContainer.className = "instructionsContainer";
theDiv === null || theDiv === void 0
  ? void 0
  : theDiv.appendChild(instructionsContainer);
var instructionsHead = document.createElement("h3");
var instructionsText = document.createElement("p");
instructionsHead.innerHTML = "Så spelar du";
instructionsText.innerHTML =
  "Försök att slå datorn! Klicka på ikonerna för att välja sten, sax eller påse";
instructionsContainer.appendChild(instructionsHead);
instructionsContainer.appendChild(instructionsText);
// Skapa sektion för knappar
var app = document.getElementById("app");
var buttonContainer = document.createElement("section");
buttonContainer.className = "buttonContainer";
// Skapa ikoner för val
var rockIcon = document.createElement("i");
rockIcon.className = "fa-regular fa-hand-back-fist";
var paperIcon = document.createElement("i");
paperIcon.className = "fa-regular fa-hand";
var scissorsIcon = document.createElement("i");
scissorsIcon.className = "fa-regular fa-hand-scissors";
// Lägg till knappar i container
buttonContainer.appendChild(rockIcon);
buttonContainer.appendChild(scissorsIcon);
buttonContainer.appendChild(paperIcon);
app === null || app === void 0 ? void 0 : app.appendChild(buttonContainer);
// Alternativen
var choices = ["Sten", "Sax", "Påse"];
// Funktion för datorns val
function getComputerChoice() {
  var randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
var computerScore = 0;
var playerScore = 0;
var drawScore = 0;
var scoreP = document.createElement("p");
scoreP.className = "scoreP";
var scorePComputer = document.createElement("p");
scorePComputer.className = "scoreP";
var drawP = document.createElement("p");
drawP.className = "scoreP";
// Funktion för att bestämma vinnaren
function determineWinner(player, computer) {
  if (player === computer) {
    drawScore++;
    drawP.innerHTML =
      "Det har blivit oavgjort: " + drawScore.toString() + " gånger";
    theDiv === null || theDiv === void 0 ? void 0 : theDiv.appendChild(drawP);
    return "Oavgjort!";
  } else if (
    (player === "Sten" && computer === "Sax") ||
    (player === "Sax" && computer === "Påse") ||
    (player === "Påse" && computer === "Sten")
  ) {
    playerScore++;
    scoreP.innerHTML = "Du har vunnit: " + playerScore.toString() + " gånger";
    theDiv === null || theDiv === void 0 ? void 0 : theDiv.appendChild(scoreP);
    return "Du vann!";
  } else {
    computerScore++;
    scorePComputer.innerHTML =
      "Datorn har vunnit: " + computerScore.toString() + " gånger";
    theDiv === null || theDiv === void 0
      ? void 0
      : theDiv.appendChild(scorePComputer);
    return "Datorn vann!";
  }
}
// Funktion för att visa resultatet i HTML
function createHtmlWinner(result, player, computer) {
  // Rensa tidigare resultat
  var existingResult = document.querySelector(".result-container");
  if (existingResult) {
    existingResult.remove();
  }
  // Skapa en container för resultaten
  var resultContainer = document.createElement("div");
  resultContainer.className = "result-container";
  // Spelarens val
  var playerChoiceElement = document.createElement("p");
  playerChoiceElement.innerHTML = "Du valde ".concat(player);
  resultContainer.appendChild(playerChoiceElement);
  // Datorns val
  var computerChoiceElement = document.createElement("p");
  computerChoiceElement.innerHTML = "Datorn valde ".concat(computer);
  resultContainer.appendChild(computerChoiceElement);
  // Resultatet
  var resultElement = document.createElement("h2");
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
  theDiv === null || theDiv === void 0
    ? void 0
    : theDiv.appendChild(resultContainer);
}
// Klickhändelser för spelval
rockIcon.addEventListener("click", function () {
  var playerChoice = "Sten";
  var computerChoice = getComputerChoice();
  var result = determineWinner(playerChoice, computerChoice);
  createHtmlWinner(result, playerChoice, computerChoice);
});
scissorsIcon.addEventListener("click", function () {
  var playerChoice = "Sax";
  var computerChoice = getComputerChoice();
  var result = determineWinner(playerChoice, computerChoice);
  createHtmlWinner(result, playerChoice, computerChoice);
});
paperIcon.addEventListener("click", function () {
  var playerChoice = "Påse";
  var computerChoice = getComputerChoice();
  var result = determineWinner(playerChoice, computerChoice);
  createHtmlWinner(result, playerChoice, computerChoice);
});
