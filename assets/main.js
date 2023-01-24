const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu");
const iconMenu = document.querySelector(".menu .fa-solid");
const video = document.querySelector(".video");
const feature = document.querySelector(".feature");
const about = document.querySelector(".about");
const gallery = document.querySelector(".gallery");

const email = document.querySelector(".email");
const form = document.querySelector(".form");
const number = document.querySelector(".number");
const message = document.querySelector(".messager");

menu.addEventListener("click", () => {
  navbar.classList.toggle("block");

  if (iconMenu.classList.contains("fa-bars")) {
    iconMenu.classList.replace("fa-bars", "fa-xmark");
  } else {
    iconMenu.classList.replace("fa-xmark", "fa-bars");
  }
});
