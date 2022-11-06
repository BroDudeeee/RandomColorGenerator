const letters = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const hexColor = document.querySelector(".hexColor");
const btn = document.querySelector("button");

let randnum;

btn.addEventListener("click", () => {
  createColor();
});

const createColor = () => {
  let color = "";
  for (let i = 0; i < 6; i++) {
    randnum = Math.floor(Math.random() * letters.length);
    color += letters[randnum];
  }
  hexColor.innerText = `#${color}`;
  document.body.style.background = `#${color}`;
};
