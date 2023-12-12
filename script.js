document.addEventListener("DOMContentLoaded", function() {
    var movingImage = document.getElementById("pfimage");
    var windowHeight = window.innerHeight;

    window.addEventListener("scroll", function() {
      var scrollPosition = window.scrollY;
      var newPosition = (scrollPosition / windowHeight) * 100;

      movingImage.style.transform = "translateX(" + newPosition + "vw)";
    });
  });