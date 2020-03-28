import { renderResultsScreen } from "./results_screen";

export const renderPlayScreen = (mode) => {
  const screen = document.getElementById("screen");





  console.log("reached play", mode);
  const button = document.createElement("button");
  button.textContent = "Go to Results"
  button.addEventListener("click", renderResultsScreen);
  screen.appendChild(button);
};