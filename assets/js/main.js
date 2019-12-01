
var rezie = function() {
  var clientWidth = document.body.clientWidth;
  var clientHeight = document.body.clientHeight;
  var clientWidthLeft = clientWidth * 0.1 + "px";

  var header = document.getElementById("header");
  var section = document.getElementById("section");
  var footer = document.getElementById("footer");

  header.style.left = clientWidthLeft;
  section.style.left = clientWidthLeft;
  footer.style.left = clientWidthLeft;

  var blocks = document.getElementsByClassName("image-block");
  var images = document.getElementsByClassName("image");
  var contents = document.getElementsByClassName("image-content");

  if (clientWidth > 900) {
    for (var i = 0; i < images.length; i++) {
      images[i].style.position = "absolute";
      images[i].style.left = "10%";
      images[i].style.width = "25%";
      images[i].style.top = "5%";
      // images[i].style.height = images[0].offsetWidth + "px";
    }
    for (var i = 0; i < contents.length; i++) {
      contents[i].style.position = "absolute";
      contents[i].style.left = "45%";
      contents[i].style.width = "45%";
      contents[i].style.top = "10%";
      // contents[i].style.height = images[0].offsetWidth + "px";
    }
    for (var i = 0; i < blocks.length; i++) {
      blocks[i].style.left = "5%";
      blocks[i].style.width = "90%";
      blocks[i].style.top = "10%";
      blocks[i].style.height =
          (images[i].offsetHeight > contents[i].offsetHeight
               ? images[i].offsetHeight
               : contents[i].offsetHeight) +
          30 + "px";
    }
  } else {
    for (var i = 0; i < images.length; i++) {
      images[i].style.position = "relative";
      images[i].style.left = "20%";
      images[i].style.width = "60%";
      images[i].style.top = "10%";
      // images[i].style.height = images[i].offsetWidth + "px";
    }
    for (var i = 0; i < contents.length; i++) {
      contents[i].style.position = "relative";
      contents[i].style.left = "20%";
      contents[i].style.width = "60%";
      contents[i].style.top = "10%";
      // contents[i].style.height = images[i].offsetHeight + "px";
    }
    for (var i = 0; i < blocks.length; i++) {
      blocks[i].style.left = "20%";
      blocks[i].style.width = "60%";
      blocks[i].style.top = "5%";
      blocks[i].style.height = "auto";
    }
  }
}

window.onresize = function() { rezie(); };
rezie();