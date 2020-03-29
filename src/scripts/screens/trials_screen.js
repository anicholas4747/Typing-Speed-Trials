import { renderPlayScreen } from "./play_screen";

export const renderTrialsScreen = () => {
  const screen = document.getElementById("screen");

  const trialsDiv = document.createElement("div");
  trialsDiv.id = "trials-div";
  screen.appendChild(trialsDiv);

  for (let wpm = 20; wpm <= 60; wpm = wpm + 5) {
    const trial = document.createElement("h2");
    trial.textContent = `${wpm} WPM`;
    trial.classList.add("trials");
    const red = 60+ (wpm * 3);
    const green = 275 - (wpm * 3);
    trial.style.backgroundColor = `rgba(${red}, ${green}, 0, 0.55)`;
    trial.addEventListener("click", sendToPlayCB(wpm));
    trialsDiv.appendChild(trial);

    if (wpm === 60) {
      const endless = document.createElement("h2");
      endless.textContent = `Endless Mode`;
      endless.classList.add("trials");
      endless.style.backgroundColor = `rgba(255, 0, 0, 0.65)`;
      endless.style.width = "95%";
      endless.style.fontSize = "2.8vw";
      endless.addEventListener("click", sendToPlayCB("endless"));
      trialsDiv.appendChild(endless);
    }
  }

  function sendToPlayCB (mode) {
    return () => {
      const buttons = document.getElementById("trials-div");
      if (buttons) buttons.remove();
      renderPlayScreen(mode);
    };
  }
};