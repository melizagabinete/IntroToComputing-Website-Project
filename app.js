let toggle_btn;
let big_wrapper;
let hamburger_menu;
let dark = false;

function declare() {
  toggle_btn = document.querySelector(".toggle-btn");
  big_wrapper = document.querySelector(".big-wrapper");
  hamburger_menu = document.querySelector(".hamburger-menu");
}

const main = document.querySelector("main");

declare();

function toggleAnimation() {
  dark = !dark;
  const clone = big_wrapper.cloneNode(true);
  
  if (dark) {
    clone.classList.remove("light");
    clone.classList.add("dark");
  } else {
    clone.classList.remove("dark");
    clone.classList.add("light");
  }
  
  clone.classList.add("copy");
  main.appendChild(clone);

  document.body.classList.add("stop-scrolling");

  clone.addEventListener("animationend", () => {
    document.body.classList.remove("stop-scrolling");
    main.removeChild(big_wrapper);
    declare();
    events();
  });
}

function toggleMenu() {
  big_wrapper.classList.toggle("active");
}

function closeMenu() {
  big_wrapper.classList.remove("active");
}

function events() {
  toggle_btn.addEventListener("click", toggleAnimation);
  hamburger_menu.addEventListener("click", toggleMenu);

  const menuItems = document.querySelectorAll(".links ul li a");
  menuItems.forEach((item) => {
    item.addEventListener("click", closeMenu);
  });
}

events();
