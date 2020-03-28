

export const togglePlacementDisplay = (e) => {
  const screen = document.getElementById("screen");
  const div = screen.children[0];
  const img = div.children[0];

  if (e.target.dataset.showing === "true"){
    div.classList.remove("show-modal");
    img.classList.remove("show-placement");
    div.classList.add("hidden");
    img.classList.add("hidden");
    e.target.dataset.showing = "false";
  } else {
    div.classList.remove("hidden");
    img.classList.remove("hidden");
    div.classList.add("show-modal");
    img.classList.add("show-placement");
    e.target.dataset.showing = "true";
  }
};