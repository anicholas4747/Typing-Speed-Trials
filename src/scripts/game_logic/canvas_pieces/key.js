class Key {
  constructor(char){
    this.char = char.toLowerCase();

    let lane;
    if (this.char === " ") {
      lane = window.gameData.goalPos["space"][0];
    } else if ("qaz".includes(this.char)) {
      lane = window.gameData.goalPos["qaz"][0];
    } else if ("wsx".includes(this.char)) {
      lane = window.gameData.goalPos["wsx"][0];
    } else if ("edc".includes(this.char)) {
      lane = window.gameData.goalPos["edc"][0];
    } else if ("rfvbgt".includes(this.char)) {
      lane = window.gameData.goalPos["rfvbgt"][0];
    } else if ("yhnmju".includes(this.char)) {
      lane = window.gameData.goalPos["yhnmju"][0];
    } else if ("ik,".includes(this.char)) {
      lane = window.gameData.goalPos["ik,"][0];
    } else if ("ol.".includes(this.char)) {
      lane = window.gameData.goalPos["ol."][0];
    } else if ("p".includes(this.char)) {
      lane = window.gameData.goalPos["p"][0];
    }
    this.x = lane;
    this.y = window.gameData.canvasHeight * 0.3;

    // 1000MS/SEC / ((WPM * 5 CHARS/WORD) / 60SEC)
    this.speed = 1000 / ((window.gameData.wpm * 5) / 60);

    this.hit = false;
    this.missed = false;
  }

  update () {
    // fall from top
    this.y += ((window.gameData.canvasHeight * 0.55) / this.speed);

    // if key correctly hit
    const hitZone = Math.abs(this.y - window.gameData.canvasHeight * 0.85) < 5;
    const pressingRightKey = (this.char === " ") ? window.gameData.pressedKeys.space : window.gameData.pressedKeys[this.char];
    if (!this.hit && hitZone && pressingRightKey) {
      this.hit = true;
      window.gameData.streak += 1;
      window.gameData.typedString += this.char;
    }

    // if key missed
    const missedZone = (this.y - window.gameData.canvasHeight * 0.9) > 5;
    if (!this.missed && !this.hit && missedZone) {
      this.missed = true;
      window.gameData.streak = 0;
      window.gameData.health -= 1;
      window.gameData.typedString += "*";
    }

    this.draw();
  }

  draw () {
    window.ctx.lineWidth = 5;
    window.ctx.font = "30px Arial";

    const goalWidth = (this.char === " ") ? (window.gameData.canvasWidth * 0.05) * 2 : (window.gameData.canvasWidth * 0.05);
    window.ctx.fillRect(this.x, this.y, goalWidth, window.gameData.canvasWidth * 0.05);
    window.ctx.fill();

    if (!this.hit && !this.missed) {
      // draw key falling
      window.ctx.fillStyle = "#000";
      window.ctx.strokeStyle = "#000";
    } else if (this.hit) {
      // don't draw the key anymore
      window.ctx.fillStyle = "#000";
      window.ctx.strokeStyle = "#0F0";
    } else if (this.missed) {
      // draw red border around key
      window.ctx.fillStyle = "#000";
      window.ctx.strokeStyle = "#F00";
    }

    const printText = (this.char === " ") ? "SPACE" : this.char.toUpperCase();
    window.ctx.strokeRect(this.x, this.y, goalWidth, window.gameData.canvasWidth * 0.05);
    window.ctx.fillText(printText, this.x + (goalWidth / 3), this.y + (goalWidth / 1.5));
  }
}

export default Key;