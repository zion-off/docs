const enlarging = document.querySelector(".mugler");
var originalWidth = enlarging.offsetWidth;
var test = window.innerHeight * 0.2;

window.addEventListener("scroll", function () {
  if (window.innerWidth > 768) {
    if (window.scrollY >= window.innerHeight * 0.2) {
      var newWidth = originalWidth + window.scrollY - test;
      newWidth = Math.min(newWidth, originalWidth * 1.8);
      enlarging.style.width = newWidth + "px";
    }
  }

});

window.addEventListener("load", rotateImages);

function rotateImages() {
  var imagePaths = ["images/1.jpeg", "images/2.jpeg", "images/3.jpeg"];
  var img = document.getElementById("mugler");
  var index = 0;
  function updateImage() {
    img.src = imagePaths[index];
    index = (index + 1) % imagePaths.length;
  }
  setInterval(updateImage, 5000);
}
