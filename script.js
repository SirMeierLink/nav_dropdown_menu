// print variable created to shorten typing console.log
const print = console.log;
//
const li_1 = document.querySelector(".features");
const li_2 = document.querySelector(".company");
// Grabbing submenu below
const submenu_hide = document.querySelectorAll(".submenu");

// Grabbing the image icons
const mobile_menu = document.querySelector('img[alt="menu-icon"]');
const mobile_close_menu = document.querySelector(
  'img[alt="menu close button"]'
);

// Grabbing the nav ul
const nav = document.querySelector("ul");

function rotateArrow(parent) {
  parent.children[1].classList.toggle("arrow-rotate");
}

li_1.addEventListener("click", () => {
  rotateArrow(li_1);
  submenu_hide[0].classList.toggle("hide-submenu");
});

li_2.addEventListener("click", () => {
  rotateArrow(li_2);
  submenu_hide[1].classList.toggle("hide-submenu");
});

mobile_menu.addEventListener("click", () => {
  mobile_menu.classList.remove("mobile-hide-submenu");
  mobile_menu.classList.add("hide-menu");
  mobile_close_menu.classList.remove("mobile-hide-submenu");
  nav.classList.add("show-mobile-menu");
});

mobile_close_menu.addEventListener("click", () => {
  mobile_menu.classList.remove("hide-menu");
  mobile_menu.classList.add("mobile-hide-submenu");
  mobile_close_menu.classList.add("mobile-hide-submenu");
  nav.classList.remove("show-mobile-menu");
});
