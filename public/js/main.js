window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
// header--------------------menu

const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu-btn");
const colseMenuBtn = document.querySelector(".close-menu-btn");

[openMenuBtn, colseMenuBtn].forEach((btn) => {
  btn.addEventListener("click", () => {
    menu.classList.toggle("open");
    menu.style.transition = "transform 0.5s ease";
  });
});

menu.addEventListener("transitionend", function () {
  this.removeAttribute("style");
});

menu.querySelectorAll(".dropdown > i").forEach((arrow) => {
  arrow.addEventListener("click", function () {
    this.closest(".dropdown").classList.toggle("active");
  });
});

// header--------------------menu

// scrollup button
const scrollUp = document.querySelector(".scrollUp");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    scrollUp.classList.add("active");
  } else {
    scrollUp.classList.remove("active");
  }
});

// whatsapp

const whatScrollUp = document.querySelector(".wtascrollUp");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    whatScrollUp.classList.add("active");
  } else {
    whatScrollUp.classList.remove("active");
  }
});

// skype

const skypeScrollUp = document.querySelector(".skypescrollUp");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    skypeScrollUp.classList.add("active");
  } else {
    skypeScrollUp.classList.remove("active");
  }
});

// about us tab-box

//
// preloader
var preloader = document.getElementById("loader");
function loadPage() {
  preloader.style.display = "none";
}
// ///////////////////////
// ///////////////////////
// ///////////////////////
// ///////////////////////
// ///////////////////////
// ///////////////////////
// ///////////////////////
// ///////////////////////
