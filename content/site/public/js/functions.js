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
      name = "Math";
      break;
    case 2:
      name = "Wikipedia";
      break;
    case 3:
      name = "CSS";
      break;
  }
  document.getElementById("title").innerHTML = name;
  document.getElementById("image_link").href = "article" + slide + ".html";
}

function share_popup(){
  alert("Share this on social media manually, thanks.")
}

function feedback_popup(){
 prompt("What do you think of the website?","Hmmm");
}
