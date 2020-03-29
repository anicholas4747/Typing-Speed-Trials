class Goal {
  constructor(keys, x, y) {
    this.keys = keys;
    this.x = x;
    this.y = y;
  }

  update() {
    let keyHeld = false;
    this.keys.forEach( (k) => {
      if (window.gameData.pressedKeys[k]) {
        keyHeld = true;
      }
    });
    this.draw(keyHeld);
  }

  draw(held) {
    let { health, streak, wpm, canvasWidth, canvasHeight } = window.gameData;
    let keyStr = this.keys.join("");

    window.ctx.fillStyle = "#111";
    window.ctx.font = "60px Arial";

    // WPM
    window.ctx.fillText(`${wpm} WPM`, (canvasWidth / 2) - 50, 50);
    
    // Health
    window.ctx.fillRect(canvasWidth - 255, 50, 200, 50);
    window.ctx.fill();
    window.ctx.fillStyle = "#CCC";
    window.ctx.fillRect(canvasWidth - 255, 50, health * 10, 50);
    window.ctx.fill();
    window.ctx.fillStyle = "#111";
    window.ctx.fillText(`${health}`, canvasWidth - 50, 50);
    
    // Streak
    window.ctx.fillText(`Streak: ${streak}`, (canvasWidth / 2) - 30, 150);
    
    // Goal
    let fillColor;
    if (keyStr === "qaz") {
      fillColor = "#f00";
    } else if (keyStr === "wsx") {
      fillColor = "";
    } else if (keyStr === "edc") {
      fillColor = "";
    } else if (keyStr === "rfvbgt") {
      fillColor = "";
    } else if (keyStr === "space") {
      fillColor = "";
    } else if (keyStr === "yhnmju") {
      fillColor = "";
    } else if (keyStr === "ik,") {
      fillColor = "";
    } else if (keyStr === "ol.") {
      fillColor = "";
    } else if (keyStr === "p") {
      fillColor = "";
    }

    const goalWidth = (keyStr === "space") ? 102 : 51;
    window.ctx.lineWidth = 15;
    window.ctx.beginPath();
    window.ctx.fillRect(this.x, this.y, goalWidth, 51);
    window.ctx.fillStyle = held ? fillColor : "rgba(0,0,0,0.25)";
    window.ctx.fill();
    
    // Track
    window.ctx.beginPath();
    window.ctx.moveTo(goalWidth / 2, 200);
    window.ctx.lineTo(goalWidth / 2, this.y);
    window.ctx.strokeStyle = "#111";
    window.ctx.stroke();
  }
}

export const populateGoals = () => {
  const goals = [];
  for (let keyStr in window.gameData.goalPos) {
    let keys = (keyStr === "space") ? ["space"] : keyStr.split("");
    let x = window.gameData.goalPos[keyStr][0];
    let y = window.gameData.goalPos[keyStr][1];
    goals.push(new Goal(keys, x, y));
  }

  return goals;
};