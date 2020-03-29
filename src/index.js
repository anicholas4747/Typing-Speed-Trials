import { togglePlacementDisplay } from "./scripts/screens/placement_screen";
import { renderTrialsScreen } from "./scripts/screens/trials_screen";
import { changeSound } from "./scripts/util/change_sound";


window.addEventListener("DOMContentLoaded", () => {
  const placement = document.getElementById("placement");
  placement.addEventListener("click", togglePlacementDisplay);

  const switchDiv = document.getElementById("switch");
  window.soundChoice = "click";
  switchDiv.addEventListener("click", changeSound);

  renderTrialsScreen();
});