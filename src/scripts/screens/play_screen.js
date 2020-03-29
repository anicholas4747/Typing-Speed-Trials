import { renderResultsScreen } from "./results_screen";
import { changeGameEventListeners } from "../util/events";
import { populateGoals } from "../game_logic/canvas_pieces/goals";

export const renderPlayScreen = (mode) => {
  const screen = document.getElementById("screen");
  const canvas = document.createElement("canvas");
  canvas.id = "canvas";
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  screen.appendChild(canvas);

  const quitButton = document.createElement("h3");
  quitButton.id = "quit-button";
  quitButton.textContent = "QUIT";
  screen.appendChild(quitButton);

  // constants that game pieces listen for
  window.ctx = canvas.getContext("2d");
  window.gameData = {
    health: 20,
    streak: 0,
    wpm: (mode === "endless") ? 20 : mode,
    typedString: "",
    soundFX: window.soundChoice,
    canvasWidth: canvas.width,
    canvasHeight: canvas.height,
    pressedKeys: { "a": false, "b": false, "c": false, "d": false, "e": false, "f": false, "g": false, "h": false, "i": false, "j": false, "k": false, "l": false, "m": false, "n": false, "o": false, "p": false, "q": false, "r": false, "s": false, "t": false, "u": false, "v": false, "w": false, "x": false, "y": false, "z": false, ",": false, ".": false, "space": false },
    goalPos: {
      "qaz": [canvas.width / 2, canvas.height / 2],
      "wsx": [canvas.width / 2, canvas.height / 2],
      "edc": [canvas.width / 2, canvas.height / 2],
      "rfvbgt": [canvas.width / 2, canvas.height / 2],
      "space": [canvas.width / 2, canvas.height / 2],
      "yhnmju": [canvas.width / 2, canvas.height / 2],
      "ik,": [canvas.width / 2, canvas.height / 2],
      "ol.": [canvas.width / 2, canvas.height / 2],
      "p": [canvas.width / 2, canvas.height / 2]
    }
  };

  // add keypress events
  changeGameEventListeners("add");

  // draw canvas elements to the screen
  const canvasElements = [];
  canvasElements.push(...populateGoals());

  animate();

  // animation function
  function animate() {
    if (window.gameData.health === 0) { // or if they finished the trial
      cancelAnimationFrame(animate);
      changeGameEventListeners("remove");
      renderResultsScreen();
    } else {
      requestAnimationFrame(animate);
    }
    window.ctx.clearRect(0, 0, innerWidth, innerHeight);
  
    canvasElements.forEach(el => {
      el.update();
    });
  }
};
