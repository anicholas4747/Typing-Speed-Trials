import { togglePlacementDisplay } from "./scripts/screens/placement_screen";
import { renderTrialsScreen } from "./scripts/screens/trials_screen";


window.addEventListener("DOMContentLoaded", () => {
  const placement = document.getElementById("placement");
  placement.addEventListener("click", togglePlacementDisplay);

  renderTrialsScreen();
});