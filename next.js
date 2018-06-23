
var nxt = 0;
var images = ['1', '2', '3', '4', '5'];

var show = document.getElementById("pic");
show.classList.add('animate');

// document.getElementById("next").addEventListener("click", nxtimg);
// document.getElementById("prev").addEventListener("click", nxtimg);
let btns = document.querySelectorAll("#next, #prev");
console.log(btns);
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", nxtimg);
}



function nxtimg(event) {

  // var status = show.classList.contains('animate');
  // if (!status) {
  //   show.classList.add('animate');
  //   setTimeout(() => show.classList.remove('animate'), 1000);
  document.querySelector("#next").disabled = true;
  document.querySelector("#prev").disabled = true;

  show.classList.remove('animate');
  setTimeout(function () {
    show.classList.add('animate');
  }, 1);

  // show.classList.add('animate');

  var btn = event.target.id;
  console.log(btn);

  if (btn == "next") {
    nxt++;
    if (nxt < images.length) {
      show.src = images[nxt] + ".jpeg";
    }
    else {
      nxt = 0;
      show.src = images[nxt] + ".jpeg"; // ==`${images[nxt]}.jpeg`
    }
    console.log(`image ${nxt + 1}`);
  }

  else {
    nxt--;
    if (nxt < 0) {
      nxt = images.length - 1;
      show.src = images[nxt] + ".jpeg";
    }
    else {
      show.src = images[nxt] + ".jpeg";
    }
    console.log(`image ${nxt + 1}`);
  }
  setTimeout( function(){
  document.querySelector("#next").disabled=false;
  document.querySelector("#prev").disabled=false;  
  }, 1000);
}

// console.log(images);
// var imgsrc = images[0] + ".jpeg";
// var img2 = `${images[1]}.jpeg`;
// console.log(typeof (imgsrc));