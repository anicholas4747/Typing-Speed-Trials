import { renderPlayScreen } from "./play_screen";

export const renderTrialsScreen = () => {
  const screen = document.getElementById("screen");
  console.log("reached trials");
  const button = document.createElement("button");
  button.textContent = "Go to Play"
  button.addEventListener("click", renderPlayScreen);
  screen.appendChild(button);
};