window.onload = function() {
  var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));

  if ( mobile ) {
    alert('Mobile version is under construction. Please view this page using Desktop for better experience.');
  } else {

  };
};

let mybutton = document.getElementById("go-to-top");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
  if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
  ) {
      mybutton.style.display = "block";
  } else {
      mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}