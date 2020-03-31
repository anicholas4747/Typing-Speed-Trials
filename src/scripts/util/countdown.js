export const countdown = (printInterval) => {
  const screen = document.getElementById("screen");
  const three = document.createElement("h3");
  three.id = "countdown-hide";
  three.textContent = "3";

  const two = document.createElement("h3");
  two.id = "countdown-hide";
  two.textContent = "2";

  const one = document.createElement("h3");
  one.id = "countdown-hide";
  one.textContent = "1";

  const typeStart = document.createElement("h3");
  typeStart.id = "countdown-hide";
  typeStart.textContent = "Type!";

  screen.appendChild(three);
  screen.appendChild(two);
  screen.appendChild(one);
  screen.appendChild(typeStart);

  setTimeout(() => {
    three.id = "countdown-show";
  }, printInterval);

  setTimeout(() => {
    three.remove();
    two.id = "countdown-show";
  }, (printInterval * 2));

  setTimeout(() => {
    two.remove();
    one.id = "countdown-show";
  }, (printInterval * 3));

  setTimeout(() => {
    one.remove();
    typeStart.id = "countdown-show";
  }, (printInterval * 4));

  setTimeout(() => {
    typeStart.remove();
  }, (printInterval * 5));
};