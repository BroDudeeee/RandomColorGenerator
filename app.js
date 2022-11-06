let red;
let blue;
let green;

const btn = document.querySelector("button");
let randnum;

btn.addEventListener("click", () => {
  choseRandColor();
});

const choseRandColor = () => {
  red = Math.floor(Math.random() * 255);
  green = Math.floor(Math.random() * 255);
  blue = Math.floor(Math.random() * 255);
  document.body.style.backgroundColor = `rgba(${red}, ${green}, ${blue})`;
};
