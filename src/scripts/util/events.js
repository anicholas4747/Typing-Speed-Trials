import { renderTrialsScreen } from "../screens/trials_screen";

export const changeGameEventListeners = (addOrRemove) => {
  if (addOrRemove === "add") {
    addEventListener("keydown", keyDownCB);
    addEventListener("keyup", keyUpCB);
    document.getElementById("quit-button").addEventListener("click", () => {
      changeGameEventListeners("remove");
      renderTrialsScreen();
    });
  } else if (addOrRemove === "remove") {
    removeEventListener("keydown", keyDownCB);
    removeEventListener("keyup", keyUpCB);
    document.getElementById("canvas").remove();
    document.getElementById("quit-button").remove();
  }
};

function keyDownCB (e) {
  switch (e.keyCode) {
    case 32:
      window.gameData.pressedKeys.space = true;
      return;
    case 65:
      window.gameData.pressedKeys.a = true;
      console.log(window.gameData.pressedKeys.a)
      return;
    case 66:
      window.gameData.pressedKeys.b = true;
      return;
    case 67:
      window.gameData.pressedKeys.c = true;
      return;
    case 68:
      window.gameData.pressedKeys.d = true;
      return;
    case 69:
      window.gameData.pressedKeys.e = true;
      return;
    case 70:
      window.gameData.pressedKeys.f = true;
      return;
    case 71:
      window.gameData.pressedKeys.g = true;
      return;
    case 72:
      window.gameData.pressedKeys.h = true;
      return;
    case 73:
      window.gameData.pressedKeys.i = true;
      return;
    case 74:
      window.gameData.pressedKeys.j = true;
      return;
    case 75:
      window.gameData.pressedKeys.k = true;
      return;
    case 76:
      window.gameData.pressedKeys.l = true;
      return;
    case 77:
      window.gameData.pressedKeys.m = true;
      return;
    case 78:
      window.gameData.pressedKeys.n = true;
      return;
    case 79:
      window.gameData.pressedKeys.o = true;
      return;
    case 80:
      window.gameData.pressedKeys.p = true;
      return;
    case 81:
      window.gameData.pressedKeys.q = true;
      return;
    case 82:
      window.gameData.pressedKeys.r = true;
      return;
    case 83:
      window.gameData.pressedKeys.s = true;
      return;
    case 84:
      window.gameData.pressedKeys.t = true;
      return;
    case 85:
      window.gameData.pressedKeys.u = true;
      return;
    case 86:
      window.gameData.pressedKeys.v = true;
      return;
    case 87:
      window.gameData.pressedKeys.w = true;
      return;
    case 88:
      window.gameData.pressedKeys.x = true;
      return;
    case 89:
      window.gameData.pressedKeys.y = true;
      return;
    case 90:
      window.gameData.pressedKeys.z = true;
      return;
    case 188:
      window.gameData.pressedKeys[","] = true;
      return;
    case 190:
      window.gameData.pressedKeys["."] = true;
      return;
  }
}

function keyUpCB (e) {
  switch (e.keyCode) {
    case 32:
      window.gameData.pressedKeys.space = false;
      return;
    case 65:
      window.gameData.pressedKeys.a = false;
      return;
    case 66:
      window.gameData.pressedKeys.b = false;
      return;
    case 67:
      window.gameData.pressedKeys.c = false;
      return;
    case 68:
      window.gameData.pressedKeys.d = false;
      return;
    case 69:
      window.gameData.pressedKeys.e = false;
      return;
    case 70:
      window.gameData.pressedKeys.f = false;
      return;
    case 71:
      window.gameData.pressedKeys.g = false;
      return;
    case 72:
      window.gameData.pressedKeys.h = false;
      return;
    case 73:
      window.gameData.pressedKeys.i = false;
      return;
    case 74:
      window.gameData.pressedKeys.j = false;
      return;
    case 75:
      window.gameData.pressedKeys.k = false;
      return;
    case 76:
      window.gameData.pressedKeys.l = false;
      return;
    case 77:
      window.gameData.pressedKeys.m = false;
      return;
    case 78:
      window.gameData.pressedKeys.n = false;
      return;
    case 79:
      window.gameData.pressedKeys.o = false;
      return;
    case 80:
      window.gameData.pressedKeys.p = false;
      return;
    case 81:
      window.gameData.pressedKeys.q = false;
      return;
    case 82:
      window.gameData.pressedKeys.r = false;
      return;
    case 83:
      window.gameData.pressedKeys.s = false;
      return;
    case 84:
      window.gameData.pressedKeys.t = false;
      return;
    case 85:
      window.gameData.pressedKeys.u = false;
      return;
    case 86:
      window.gameData.pressedKeys.v = false;
      return;
    case 87:
      window.gameData.pressedKeys.w = false;
      return;
    case 88:
      window.gameData.pressedKeys.x = false;
      return;
    case 89:
      window.gameData.pressedKeys.y = false;
      return;
    case 90:
      window.gameData.pressedKeys.z = false;
      return;
    case 188:
      window.gameData.pressedKeys[","] = false;
      return;
    case 190:
      window.gameData.pressedKeys["."] = false;
      return;
  }
}