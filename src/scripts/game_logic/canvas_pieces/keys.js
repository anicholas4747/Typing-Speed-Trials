class Key {
  constructor(char){
    this.char = char;

    let lane;
    if (char === "space") {
      lane = window.gameData.goalPos["space"][0];
    } else if ("qaz".includes(char)) {
      lane = window.gameData.goalPos["qaz"][0];
    } else if ("wsx".includes(char)) {
      lane = window.gameData.goalPos["wsx"][0];
    } else if ("edc".includes(char)) {
      lane = window.gameData.goalPos["edc"][0];
    } else if ("rfvbgt".includes(char)) {
      lane = window.gameData.goalPos["rfvbgt"][0];
    } else if ("yhnmju".includes(char)) {
      lane = window.gameData.goalPos["yhnmju"][0];
    } else if ("ik,".includes(char)) {
      lane = window.gameData.goalPos["ik,"][0];
    } else if ("ol.".includes(char)) {
      lane = window.gameData.goalPos["ol."][0];
    } else if ("p".includes(char)) {
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
    const hitZone = Math.abs(this.y - window.gameData.canvasHeight * 0.9) < 25;
    if (!this.hit && hitZone && window.gameData.pressedKeys[this.char]) {
      this.hit = true;
      window.gameData.streak += 1;
      window.gameData.typedString += (this.char === "space") ? " " : this.char;
    }

    // if key missed
    const missedZone = (this.y - window.gameData.canvasHeight * 0.9) > 25;
    if (!this.missed && !this.hit && missedZone) {
      this.missed = true;
      window.gameData.streak = 0;
      window.gameData.health -= 1;
      window.gameData.typedString += "*";
    }
  }

  draw () {
    window.ctx.lineWidth = 5;
    window.ctx.fillStyle = "#DDD";
    window.ctx.strokeStyle = "#000";
    window.ctx.font = "20px Arial";

    if (!this.hit && !this.missed) {
      // draw key falling
    } else if (this.hit) {
      // don't draw the key anymore
    } else if (this.missed) {
      // draw red border around key
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
  }
}

export default Key;