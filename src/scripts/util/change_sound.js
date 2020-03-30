import { playSound } from "../game_logic/sounds/play_sound";

export const changeSound = (e) => {
  const soundStr = e.target.value;
  if (soundStr) {
    window.soundChoice = {
      str: soundStr,
      buffer: window.gameSounds[soundStr]
    };
    // play the sound once
    playSound(0);
  }
}