import { renderTrialsScreen } from "./trials_screen";

export const renderResultsScreen = () => {
  const screen = document.getElementById("screen");
  console.log("reached results");
  const button = document.createElement("button");
  button.textContent = "Go to Trials"
  button.addEventListener("click", renderTrialsScreen);
  screen.appendChild(button);
};