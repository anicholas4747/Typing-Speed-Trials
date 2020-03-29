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

    // recover 1 health point if streak of 10 achieved
    if (!window.gameData.healthRecovering && window.gameData.streak % 10 === 0 && window.gameData.streak > 0) {
      window.gameData.healthRecovering = true;
      window.gameData.health = Math.min(20, window.gameData.health + 1);
      setTimeout(() => window.gameData.healthRecovering = false, 500);
    }

    this.draw(keyHeld);
  }

  draw(held) {
    let { health, streak, wpm, canvasWidth, canvasHeight } = window.gameData;
    let keyStr = this.keys.join("");

    window.ctx.lineWidth = 5;
    window.ctx.fillStyle = "#FFF";
    window.ctx.strokeStyle = "#FFF";
    window.ctx.font = "60px Arial";
    
    // WPM
    window.ctx.fillText(`${wpm} WPM`, (canvasWidth / 2.5), canvasHeight * 0.125);
    
    // Health
    window.ctx.fillStyle = "#111";
    window.ctx.fillRect(canvasWidth * 0.77, canvasHeight * 0.065, 200, 50);
    window.ctx.fill();
    window.ctx.fillStyle = "#0F0";
    window.ctx.fillRect(canvasWidth * 0.77, canvasHeight * 0.065, health * 10, 50);
    window.ctx.fill();
    window.ctx.strokeRect(canvasWidth * 0.77, canvasHeight * 0.065, 200, 50);
    window.ctx.fillStyle = "#FFF";
    window.ctx.fillText(`${health}`, canvasWidth * 0.925, canvasHeight * 0.125);
    
    // Streak
    window.ctx.font = "40px Arial";
    window.ctx.fillText(`Streak: ${streak}`, (canvasWidth / 2.225) - 30, 150);
    
    // Goal
    let fillColor;
    if (keyStr === "qaz") {
      fillColor = "rgba(28, 68, 183,0.95)";
    } else if (keyStr === "wsx") {
      fillColor = "rgba(242, 145, 0,0.95)";
    } else if (keyStr === "edc") {
      fillColor = "rgba(0, 141, 48,0.95)";
    } else if (keyStr === "rfvbgt") {
      fillColor = "rgba(244, 96, 0,0.95)";
    } else if (keyStr === "space") {
      fillColor = "rgba(131, 0, 217,0.95)";
    } else if (keyStr === "yhnmju") {
      fillColor = "rgba(189, 47, 46,0.95)";
    } else if (keyStr === "ik,") {
      fillColor = "rgba(197, 71, 194,0.95)";
    } else if (keyStr === "ol.") {
      fillColor = "rgba(51, 193, 243,0.95)";
    } else if (keyStr === "p") {
      fillColor = "rgba(5, 190, 142,0.95)";
    }

    const goalWidth = (keyStr === "space") ? (canvasWidth * 0.05) * 2 : (canvasWidth * 0.05);
    window.ctx.beginPath();
    window.ctx.moveTo(this.x, this.y);
    window.ctx.lineTo(this.x + goalWidth, this.y);
    window.ctx.lineTo(this.x + goalWidth, this.y + (canvasWidth * 0.05));
    window.ctx.lineTo(this.x, this.y + (canvasWidth * 0.05));
    window.ctx.lineTo(this.x, this.y);
    window.ctx.stroke();

    if (fillColor && held) {
      window.ctx.fillStyle = fillColor;
      window.ctx.fillRect(this.x * 1.005, this.y * 1.005, goalWidth * 0.9, (canvasWidth * 0.05) * 0.9);
      window.ctx.fill();
    }
    
    // Track
    window.ctx.beginPath();
    window.ctx.moveTo(this.x + (goalWidth / 2), canvasHeight * 0.3);
    window.ctx.lineTo(this.x + (goalWidth / 2), this.y);
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