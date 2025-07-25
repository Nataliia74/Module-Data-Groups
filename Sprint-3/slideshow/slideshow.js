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

let startIndex = 0;

forwardButton.addEventListener("click", () => {
  startIndex = (startIndex + 1) % images.length;
  slide.src = images[startIndex];
});

backwardButton.addEventListener("click", () => {
  startIndex = (startIndex - 1 + images.length) % images.length;
  slide.src = images[startIndex];
});
