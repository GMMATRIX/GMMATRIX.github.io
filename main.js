// Dynamically change welcome message
// List of welcome messages
/*
var welcome_langs = [
"బాలాజీ మందిర్ ఇండియాకు స్వాగతం",
"बालाजी मंदिर भारत में आपका स्वागत है",
"பாலாஜி மந்திர் இந்தியாவிற்கு வரவேற்கிறோம்",
"ਬਾਲਾਜੀ ਮੰਦਰ ਇੰਡੀਆ ਵਿੱਚ ਤੁਹਾਡਾ ਸੁਆਗਤ ਹੈ",
"Welcome to Balaji Mandir of India"];
// counter, the element to change the text to
var counter = 0;
var elem = document.getElementById("welcome");
// calls the function every two seconds
var inst = setInterval(changeWlcmTxt, 2000);

function changeWlcmTxt() {
  // checks whether the text is english
  if (welcome_langs[counter] == "Welcome to Balaji Mandir of India"){
    document.getElementById("welcome-msg").style.fontSize = "31px";
  }
  else{
    document.getElementById("welcome-msg").style.fontSize = "30px";
  }
  // sets the html value to the langauge message
  elem.innerHTML = welcome_langs[counter];
  counter++;
  // resets the counter variable
  if (counter >= welcome_langs.length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}*/

// NavBar
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function respNavbar() {
  var topNav = document.getElementById("myTopnav");
  if (topNav.className === "topnav") {
    topNav.className += " responsive";
  } else {
    topNav.className = "topnav";
  }
}

// Slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  // gets the html elements 
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("sldsh-dot");
  // changes the display mode of the slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  // checks whether the index is greater than the  slides length
  if (slideIndex > slides.length) {slideIndex = 1}   
  // adds active slides functionality 
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" sldsh-active", "");
  }
  // sets the final few properties, class name, and display style
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " sldsh-active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}