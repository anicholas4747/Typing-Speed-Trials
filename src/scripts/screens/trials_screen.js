import { renderPlayScreen } from "./play_screen";

export const renderTrialsScreen = () => {
  const screen = document.getElementById("screen");

  const trialsDiv = document.createElement("div");
  trialsDiv.id = "trials-div";
  screen.appendChild(trialsDiv);

  for (let wpm = 25; wpm <= 65; wpm = wpm + 5) {
    const trial = document.createElement("h2");
    trial.textContent = `${wpm} WPM`;
    trial.classList.add("trials");
    const red = 60+ (wpm * 3);
    const green = 275 - (wpm * 3);
    trial.style.backgroundColor = `rgba(${red}, ${green}, 0, 0.55)`;

    trialsDiv.appendChild(trial);

    if (wpm === 65) {
      const endless = document.createElement("h2");
      endless.textContent = `Endless Mode`;
      endless.classList.add("trials");
      endless.style.backgroundColor = `rgba(255, 0, 0, 0.65)`;
      endless.style.width = "95%";
      endless.style.fontSize = "2.8vw";

      trialsDiv.appendChild(endless);
    }
  }




  console.log("reached trials");
  const button = document.createElement("button");
  button.textContent = "Go to Play"
  button.addEventListener("click", renderPlayScreen);
  screen.appendChild(button);
};