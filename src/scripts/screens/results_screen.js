import { renderTrialsScreen } from "./trials_screen";

export const renderResultsScreen = () => {
  const screen = document.getElementById("screen");
  
  // add result screen html elements
  const resultsDiv = document.createElement("div");
  resultsDiv.id = "results-div";

  const button = document.createElement("button");
  button.textContent = "Return to Home";
  button.id = "return-home";
  button.addEventListener("click", () => {
    button.remove();
    resultsDiv.remove();
    renderTrialsScreen();
  });
  screen.appendChild(button);

  const won = (window.gameData.typedString.length >= window.gameData.attemptedString.length);

  const resultsH3 = document.createElement("h3");
  resultsH3.textContent = "THE RESULTS ARE IN ...";
  resultsH3.style.margin = "0.25vh auto";
  resultsH3.style.width = "fit-content";
  resultsDiv.appendChild(resultsH3);

  const resultsH2 = document.createElement("h2");
  resultsH2.textContent = won ? "YOU PASSED" : "YOU FAILED";
  resultsH2.style.color = won ? "forestgreen" : "indianred";
  resultsH2.style.fontSize = "3.3vw";
  resultsH2.style.margin = "1vh auto";
  resultsH2.style.marginBottom = "2.5vh";
  resultsH2.style.width = "fit-content";
  resultsDiv.appendChild(resultsH2);
  
  const speedText = document.createElement("h3");
  speedText.textContent = `Trial Speed: ${window.gameData.wpm} WPM`;
  speedText.style.color = "#333";
  speedText.style.margin = "1vh auto";
  speedText.style.width = "fit-content";
  resultsDiv.appendChild(speedText);

  const resultsStr = document.createElement("div");
  resultsStr.id = "results-str";

  // calc longest streak and display hit, missed, and unreached characters
  let longestStreak = 0;
  let currentStreak = 0;
  const printInterval = 10;
  let waitTime = printInterval;
  for (let i = 0; i < window.gameData.attemptedString.length; i++) {
    let char = window.gameData.attemptedString[i].toUpperCase();
    let userInput = window.gameData.typedString[i];

    const letter = document.createElement("h4");
    letter.textContent = (char === " ") ? "␣" : char;
    letter.style.display = "inline-block";
    if (char === " ") {
      letter.style.marginLeft = "0.35vw";
      letter.style.marginRight = "0.35vw";
    }

    if (userInput && char === userInput.toUpperCase()) {
      letter.style.color = "forestgreen";
      currentStreak += 1;
      longestStreak = Math.max(longestStreak, currentStreak);
    } else if (userInput) {
      letter.style.color = "indianred";
      currentStreak = 0;
    } else {
      letter.style.color = "rgba(245,245,245,0.75)";
    }
    
    if (i === 400) {
      letter.textContent = ". . .";
      setTimeout(() => resultsStr.appendChild(letter), waitTime);
      break;
    }

    setTimeout(() => resultsStr.appendChild(letter), waitTime);
    waitTime += printInterval;
  }

  const streakText = document.createElement("h3");
  streakText.textContent = `Longest Streak: ${longestStreak}`;
  streakText.style.color = "#333";
  streakText.style.margin = "1vh auto";
  streakText.style.width = "fit-content";
  resultsDiv.appendChild(streakText);

  const trialText = document.createElement("h3");
  trialText.textContent = "Text:";
  trialText.style.color = "#333";
  trialText.style.margin = "1vh auto";
  trialText.style.width = "fit-content";
  resultsDiv.appendChild(trialText);
  
  resultsDiv.appendChild(resultsStr);

  screen.appendChild(resultsDiv);
};