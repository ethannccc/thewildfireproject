//api
//let url =
//fetch(url)

//TRANSITIONS
const navTransition = () => {
  let burger = document.querySelector(".burger");
  let nav = document.querySelector(".links");
  let navLinks = document.querySelectorAll(".links li");

  //toggling nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("linksActive")
    //adding animation to links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `linksFade 400ms ease forwards ${index / 5 + 0.6}s`;
      }
    });
    //adding animation to burger
    burger.classList.toggle("toggle");
  });
}
navTransition();

//STICKY FUNCTION
window.onscroll = function() { stickyTransition() };

let title = document.querySelector(".title");
let navbar = document.querySelector("nav");
let nav = document.querySelector(".links");
let sticky = navbar.offsetTop;

function stickyTransition() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    nav.style.top = "8vh";
    title.style.marginTop = "14rem";
  } else {
    navbar.classList.remove("sticky");
    nav.style.top = "15vh";
    title.style.marginTop = "10rem";
  }
}
