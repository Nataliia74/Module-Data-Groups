const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

const imagesArray = document.querySelectorAll("img");
imagesArray.forEach((image) => {
  image.width = 600;
  image.height = 450;
});
// Write your code here#
// const screen = document.createElement("div");
// screen.id = "screen";
// document.body.appendChild(screen);

const slide = document.getElementById("carousel-img");
const forwardButton = document.getElementById("forward-btn");
const backwardButton = document.getElementById("backward-btn");

const autoForwardButton = document.createElement("button");
autoForwardButton.id = "auto-forward";
autoForwardButton.innerText = "Auto Forward";

const autoBackwardButton = document.createElement("button");
autoBackwardButton.id = "auto-backward";
autoBackwardButton.innerText = "Auto Backward";

const stopButton = document.createElement("button");
stopButton.id = "stop";
stopButton.innerText = "Stop";

const screen = document.createElement("div");
screen.id = "screen";
document.body.appendChild(screen);
screen.appendChild(slide);

const buttons = document.createElement("div");
buttons.id = "buttons";
document.body.appendChild(buttons);
buttons.append(
  autoBackwardButton,
  backwardButton,
  stopButton,
  forwardButton,
  autoForwardButton
);

let startIndex = 0;
let timer = 0;

forwardButton.addEventListener("click", () => {
  startIndex = (startIndex + 1) % images.length;
  slide.src = images[startIndex];
});

backwardButton.addEventListener("click", () => {
  startIndex = (startIndex - 1 + images.length) % images.length;
  slide.src = images[startIndex];
});

function slideShow() {
  clearInterval(timer);
  timer = setInterval(() => {
    startIndex = (startIndex + 1) % images.length;
    slide.src = images[startIndex];
  }, 5000);
}

autoForwardButton.addEventListener("click", () => {
  clearInterval(timer);
  slideShow();
});

autoBackwardButton.addEventListener("click", () => {
  clearInterval(timer);
  timer = setInterval(() => {
    startIndex = (startIndex - 1 + images.length) % images.length;
    slide.src = images[startIndex];
  }, 5000);
});

stopButton.addEventListener("click", () => {
  clearInterval(timer);
});
