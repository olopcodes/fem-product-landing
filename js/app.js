const menuButton = document.querySelector(".nav-mobile-hamburger");
const mobileMenu = document.querySelector(".nav-mobile__list");

menuButton.addEventListener("click", (e) => {
  console.log(e.target);
  if (mobileMenu.classList.contains("d-block")) {
    menuButton
      .querySelector("img")
      .setAttribute("src", "./images/icon-hamburger.svg");
  } else {
    menuButton
      .querySelector("img")
      .setAttribute("src", "./images/icon-close.svg");
  }

  mobileMenu.classList.toggle("d-block");
});
