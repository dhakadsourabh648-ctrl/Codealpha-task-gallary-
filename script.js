let images = [
  "https://picsum.photos/id/101/600/400",
  "https://picsum.photos/id/102/600/400",
  "https://picsum.photos/id/103/600/400",
  "https://picsum.photos/id/104/600/400"
];

let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = images[currentIndex];
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function changeImage(step) {
  currentIndex += step;

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  document.getElementById("lightbox-img").src = images[currentIndex];
}