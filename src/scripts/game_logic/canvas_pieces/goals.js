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
    // WPM

    // Health
    
    // Streak

    // Goals

    window.ctx.fillStyle = "#85BDB6";
    window.ctx.font = "30px Arial";
    if (totalScore) window.ctx.fillText(`Rank: `, 75, 200);
    window.ctx.fillStyle = fill;
    window.ctx.font = font;
    if (totalScore) window.ctx.fillText(`${rank}`, 175, 200);

    // Score
    window.ctx.fillStyle = "#FFC513";
    window.ctx.font = "30px Arial";
    if (totalScore) window.ctx.fillText(`Score: ${totalScore.score * 100}`, (innerWidth / 2) - 75, 200);

    // Misses
    window.ctx.fillStyle = "#DB0700";
    window.ctx.font = "30px Arial";
    if (totalScore) window.ctx.fillText(`Misses: ${totalNotes.misses}`, innerWidth - 250, 200);

    // actual circles
    window.ctx.beginPath();
    window.ctx.arc(this.x, this.y, 50, 0, Math.PI * 2);
    window.ctx.lineWidth = 15;
    window.ctx.strokeStyle = "#85BDB6";
    window.ctx.stroke();

    window.ctx.fillStyle = "#85BDB6";
    window.ctx.font = "30px Arial";
    window.ctx.fillText(this.key.toUpperCase(), this.x, this.y * 0.8);

    let gradient = window.ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, 50);
    gradient.addColorStop(0, "#FFC513");
    gradient.addColorStop(1, "#EFFBFF");
    const fillStyleClicked = held ? gradient : "#EEE";

    window.ctx.fillStyle = fillStyleClicked;
    window.ctx.fill();
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