import { renderResultsScreen } from "./results_screen";
import { changeGameEventListeners } from "../util/events";
import { populateGoals } from "../game_logic/canvas_pieces/goals";
import Key from "../game_logic/canvas_pieces/key";

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
    healthRecovering: false,
    streak: 0,
    wpm: (mode === "endless") ? 20 : mode,
    typedString: "",
    soundFX: window.soundChoice,
    canvasWidth: canvas.width,
    canvasHeight: canvas.height,
    pressedKeys: { "a": false, "b": false, "c": false, "d": false, "e": false, "f": false, "g": false, "h": false, "i": false, "j": false, "k": false, "l": false, "m": false, "n": false, "o": false, "p": false, "q": false, "r": false, "s": false, "t": false, "u": false, "v": false, "w": false, "x": false, "y": false, "z": false, ",": false, ".": false, "space": false },
    goalPos: {
      "qaz": [canvas.width * 0.05, canvas.height * 0.85],
      "wsx": [canvas.width * 0.15, canvas.height * 0.85],
      "edc": [canvas.width * 0.25, canvas.height * 0.85],
      "rfvbgt": [canvas.width * 0.35, canvas.height * 0.85],
      "space": [canvas.width * 0.45, canvas.height * 0.85],
      "yhnmju": [canvas.width * 0.60, canvas.height * 0.85],
      "ik,": [canvas.width * 0.70, canvas.height * 0.85],
      "ol.": [canvas.width * 0.80, canvas.height * 0.85],
      "p": [canvas.width * 0.90, canvas.height * 0.85]
    },
    quit: false,
    finishTime: (mode === "endless") ? "endless" : Date.now() + (60 * 1000) + (8 * 1000)
  };

  // add keypress events
  changeGameEventListeners("add");

  // add canvas elements and sample text to the screen
  const canvasElements = [];
  canvasElements.push(...populateGoals());

  // const word = "helloworld";
  const word = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  // 1000MS/SEC / ((WPM * 5 CHARS/WORD) / 60SEC)
  const printInterval = 1000 / ((window.gameData.wpm * 5) / 60);
  let waitTime = printInterval;
  for (let i in word) {
    setTimeout(() => canvasElements.push(new Key(word[i])), waitTime);
    waitTime += printInterval;
  }

  // bring canvas to life
  animate();

  // animation function
  function animate() {
    if (window.gameData.health === 0 || window.gameData.quit || Date.now() >= window.gameData.finishTime) {
      cancelAnimationFrame(animate);
      if (!window.gameData.quit) {
        changeGameEventListeners("remove");
        renderResultsScreen();
      }
    } else {
      requestAnimationFrame(animate);
    }
    window.ctx.clearRect(0, 0, innerWidth, innerHeight);
    canvasElements.forEach(el => {
      el.update();
    });
  }
};
