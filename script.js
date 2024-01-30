document.addEventListener("scroll", function() {
    var movingImage = document.getElementById("pfimage");
    var container = document.getElementById("pfimageContainer");
    var title = document.getElementById("name")
    var containerRect = container.getBoundingClientRect();
    var imageRect = movingImage.getBoundingClientRect();

    var maxLeft = containerRect.width - imageRect.width;

    if (window.scrollY <= maxLeft){
      movingImage.style.left = window.scrollY + "px";
    }else{
      movingImage.style.left = maxLeft + "px";
    }
    // move title down halve the speed of the scroll
    title.style.top = window.scrollY/2 + "px";


  });