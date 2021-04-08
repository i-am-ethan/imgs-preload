const container = document.getElementById("container");

const animalImg = [
  "./img/alpaca.png",
  "./img/gorilla.png",
  "./img/horse.png",
  "./img/niwatori.png",
  "./img/sheep.png",
  "./img/yagi.png",
];
// const newImg = document.createElement("img");

window.onload = function () {
  getImages();
  console.log("getImages");
};
function getImages() {
  for (let i = 0; i < animalImg.length; i++) {
    let img = document.createElement("img");
    img.src = animalImg[i];
    // container.appendChild(img);
    container.appendChild(img);
  }
}
