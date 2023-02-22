const nav_ul = document.querySelector(".nav-ul");
const nav_menu = document.querySelector(".nav-menu");
const nav_close = document.querySelector(".nav-close");
const header = document.querySelector("header");
nav_menu.addEventListener("click", function () {
    nav_ul.classList.toggle("hidden");
    nav_menu.classList.add("hidden");
    nav_close.classList.remove("hidden");
});
nav_close.addEventListener("click", function () {
    nav_ul.classList.toggle("hidden");
    nav_menu.classList.remove("hidden");
    nav_close.classList.add("hidden");
});


window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      header.classList.add("box-shadow");
  } else {
    header.classList.remove("box-shadow");
  }
}