class ScrollKey {
  constructor(char) {
    this.char = char.toLowerCase();

    this.x = window.gameData.canvasWidth * 0.55;
    this.y = window.gameData.canvasHeight * 0.175;

    this.speed = (window.gameData.wpm / 10);

    this.hit = false;
    this.missed = false;
  }

  update() {
    // fall from top
    this.x -= this.speed;

    // if key correctly hit
    const hitZone = Math.abs(this.x - window.gameData.canvasWidth * 0.25) < 25;
    const pressingRightKey = (this.char === " ") ? window.gameData.pressedKeys.space : window.gameData.pressedKeys[this.char];
    if (!this.hit && hitZone && pressingRightKey) {
      this.hit = true;
    }

    // if key missed
    const missedZone = (this.x - window.gameData.canvasWidth * 0.235) < 15;
    if (!this.missed && !this.hit && missedZone) {
      this.missed = true;
    }

    this.draw();
  }

  draw() {
    window.ctx.lineWidth = 5;
    window.ctx.font = "30px Arial";
    window.ctx.fillStyle = "#FFF";
    window.ctx.strokeStyle = "#FFF";

    const goalWidth = (window.gameData.canvasWidth * 0.03);
    window.ctx.fillRect(this.x, this.y, goalWidth, (window.gameData.canvasWidth * 0.03));
    window.ctx.fill();

    if (!this.hit && !this.missed) {
      // draw key scrolling
      window.ctx.fillStyle = "#000";
      window.ctx.strokeStyle = "#000";
    } else if (this.hit) {
      // draw green border around key
      window.ctx.fillStyle = "#000";
      window.ctx.strokeStyle = "#0F0";
    } else if (this.missed) {
      // draw red border around key
      window.ctx.fillStyle = "#000";
      window.ctx.strokeStyle = "#F00";
    }

    window.ctx.strokeRect(this.x, this.y, goalWidth, (window.gameData.canvasWidth * 0.03));
    const printText = (this.char === " ") ? "␣" : this.char.toUpperCase();
    const textX = this.x + (goalWidth / 3);
    const textY = this.y + (goalWidth / 1.5);
    window.ctx.fillText(printText, textX, textY);
  }
}

export default ScrollKey;