import "./style.css";
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