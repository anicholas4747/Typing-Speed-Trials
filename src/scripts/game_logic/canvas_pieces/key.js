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
    window.ctx.font = "30px Arial";

    if (!this.hit && !this.missed) {
      // draw key falling
      window.ctx.fillStyle = "#FFF";
      window.ctx.strokeStyle = "#000";
    } else if (this.hit) {
      // don't draw the key anymore
      window.ctx.fillStyle = "#0F0";
      window.ctx.strokeStyle = "#0F0";
    } else if (this.missed) {
      // draw red border around key
      window.ctx.fillStyle = "#F00";
      window.ctx.strokeStyle = "#F00";
    }

    const goalWidth = (this.char === "space") ? (window.gameData.canvasWidth * 0.05) * 2 : (window.gameData.canvasWidth * 0.05);
    window.ctx.fillRect(this.x, this.y, goalWidth, window.gameData.canvasWidth * 0.05);
    window.ctx.fill();
    window.ctx.strokeRect(this.x, this.y, goalWidth, window.gameData.canvasWidth * 0.05);
    window.ctx.fillText(this.char.toUpperCase(), this.x * 1.25, this.y * 1.25);
  }
}

export default Key;