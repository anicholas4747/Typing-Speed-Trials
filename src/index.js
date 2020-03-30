import { togglePlacementDisplay } from "./scripts/screens/placement_screen";
import { renderTrialsScreen } from "./scripts/screens/trials_screen";
import { changeSound } from "./scripts/util/change_sound";
import { loadSounds } from "./scripts/util/load_sound";


window.addEventListener("DOMContentLoaded", () => {
  const placement = document.getElementById("placement");
  placement.addEventListener("click", togglePlacementDisplay);

  // audio settings
  loadSounds();
  const switchDiv = document.getElementById("switch");
  switchDiv.addEventListener("click", changeSound);
  const volumeControl = document.querySelector('#vol-bar');
  volumeControl.addEventListener('input', function () {
    window.gameSounds.volume = this.value;
  });

  renderTrialsScreen();
});