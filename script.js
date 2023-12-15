document.addEventListener("DOMContentLoaded", function() {
    var movingImage = document.getElementById("pfimage");
    var title = document.getElementById("name")
    var windowHeight = window.innerHeight;

    window.addEventListener("scroll", function() {
      var scrollPosition = window.scrollY;
      var newPosition = (scrollPosition / windowHeight) * 100;

      movingImage.style.transform = "translateX(" + newPosition + "vw)";
      title.style.transform = "translateY(" + 0.6 * scrollPosition + "px)";
    });
  });