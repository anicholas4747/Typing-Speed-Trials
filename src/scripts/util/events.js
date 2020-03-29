import { renderTrialsScreen } from "../screens/trials_screen";

export const changeGameEventListeners = (addOrRemove, gameData) => {
  if (addOrRemove === "add") {
    addEventListener("keydown", keyDownCB.bind(this, gameData));
    addEventListener("keyup", keyUpCB.bind(this, gameData));
    document.getElementById("quit-button").addEventListener("click", () => {
      changeGameEventListeners("remove", gameData);
      renderTrialsScreen();
    });
  } else if (addOrRemove === "remove") {
    removeEventListener("keydown", keyDownCB);
    removeEventListener("keyup", keyUpCB);
    document.getElementById("canvas").remove();
    document.getElementById("quit-button").remove();
  }
};

function keyDownCB (gameData, e) {
  switch (e.keyCode) {
    case 32:
      gameData.pressedKeys.space = true;
      return;
    case 65:
      gameData.pressedKeys.a = true;
      console.log(gameData.pressedKeys.a)
      return;
    case 66:
      gameData.pressedKeys.b = true;
      return;
    case 67:
      gameData.pressedKeys.c = true;
      return;
    case 68:
      gameData.pressedKeys.d = true;
      return;
    case 69:
      gameData.pressedKeys.e = true;
      return;
    case 70:
      gameData.pressedKeys.f = true;
      return;
    case 71:
      gameData.pressedKeys.g = true;
      return;
    case 72:
      gameData.pressedKeys.h = true;
      return;
    case 73:
      gameData.pressedKeys.i = true;
      return;
    case 74:
      gameData.pressedKeys.j = true;
      return;
    case 75:
      gameData.pressedKeys.k = true;
      return;
    case 76:
      gameData.pressedKeys.l = true;
      return;
    case 77:
      gameData.pressedKeys.m = true;
      return;
    case 78:
      gameData.pressedKeys.n = true;
      return;
    case 79:
      gameData.pressedKeys.o = true;
      return;
    case 80:
      gameData.pressedKeys.p = true;
      return;
    case 81:
      gameData.pressedKeys.q = true;
      return;
    case 82:
      gameData.pressedKeys.r = true;
      return;
    case 83:
      gameData.pressedKeys.s = true;
      return;
    case 84:
      gameData.pressedKeys.t = true;
      return;
    case 85:
      gameData.pressedKeys.u = true;
      return;
    case 86:
      gameData.pressedKeys.v = true;
      return;
    case 87:
      gameData.pressedKeys.w = true;
      return;
    case 88:
      gameData.pressedKeys.x = true;
      return;
    case 89:
      gameData.pressedKeys.y = true;
      return;
    case 90:
      gameData.pressedKeys.z = true;
      return;
    case 188:
      gameData.pressedKeys[","] = true;
      return;
    case 190:
      gameData.pressedKeys["."] = true;
      return;
  }
}

function keyUpCB (e, gameData) {
  switch (e.keyCode) {
    case 32:
      gameData.pressedKeys.space = false;
      return;
    case 65:
      gameData.pressedKeys.a = false;
      return;
    case 66:
      gameData.pressedKeys.b = false;
      return;
    case 67:
      gameData.pressedKeys.c = false;
      return;
    case 68:
      gameData.pressedKeys.d = false;
      return;
    case 69:
      gameData.pressedKeys.e = false;
      return;
    case 70:
      gameData.pressedKeys.f = false;
      return;
    case 71:
      gameData.pressedKeys.g = false;
      return;
    case 72:
      gameData.pressedKeys.h = false;
      return;
    case 73:
      gameData.pressedKeys.i = false;
      return;
    case 74:
      gameData.pressedKeys.j = false;
      return;
    case 75:
      gameData.pressedKeys.k = false;
      return;
    case 76:
      gameData.pressedKeys.l = false;
      return;
    case 77:
      gameData.pressedKeys.m = false;
      return;
    case 78:
      gameData.pressedKeys.n = false;
      return;
    case 79:
      gameData.pressedKeys.o = false;
      return;
    case 80:
      gameData.pressedKeys.p = false;
      return;
    case 81:
      gameData.pressedKeys.q = false;
      return;
    case 82:
      gameData.pressedKeys.r = false;
      return;
    case 83:
      gameData.pressedKeys.s = false;
      return;
    case 84:
      gameData.pressedKeys.t = false;
      return;
    case 85:
      gameData.pressedKeys.u = false;
      return;
    case 86:
      gameData.pressedKeys.v = false;
      return;
    case 87:
      gameData.pressedKeys.w = false;
      return;
    case 88:
      gameData.pressedKeys.x = false;
      return;
    case 89:
      gameData.pressedKeys.y = false;
      return;
    case 90:
      gameData.pressedKeys.z = false;
      return;
    case 188:
      gameData.pressedKeys[","] = false;
      return;
    case 190:
      gameData.pressedKeys["."] = false;
      return;
  }
}