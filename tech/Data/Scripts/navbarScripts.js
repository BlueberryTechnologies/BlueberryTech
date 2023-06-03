function collapseMenu() {
  var x = document.getElementById("Nav-Links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  stickyNav();
};

// Get the header
var header = document.getElementById("Mobile-Header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
