var slide = 1

function change_left(){
  if (slide == 3) {
    slide = 1
  } else {
    slide = slide + 1
  }
  document.getElementById("slide").style.backgroundImage = "url('../img/space" + slide + ".jpg')";
  change_title()
}

function change_right(){
  if (slide == 1) {
    slide = 3
  } else {
    slide = slide - 1
  }
  document.getElementById("slide").style.backgroundImage = "url('../img/space" + slide + ".jpg')";
  change_title()
}

function change_title(){
  switch (slide) {
    case 1:
      name = "The Space";
      break;
    case 2:
      name = "Wooow";
      break;
    case 3:
      name = "Fäöårg";
      break;
  }
  document.getElementById("title").innerHTML = name;
  document.getElementById("image_link").href = "article" + slide + ".html";
}
