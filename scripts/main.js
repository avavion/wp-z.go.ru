const scrollOff = () => {
  const body = document.querySelector("body");
  body.style.overflow = "hidden";
};

const scrollOn = () => {
  const body = document.querySelector("body");
  body.style.overflow = "hidden";
};

const burgerMenu = (triggerSelector, menuSelector, closeSelector) => {
  const triggerButtons = document.querySelectorAll(triggerSelector),
    mobileMenu = document.querySelector(menuSelector),
    closeButton = document.querySelector(closeSelector);

  triggerButtons.forEach((item) => {
    item.addEventListener("click", () => {
      console.log("DEBUG on CLICK OPEN BTN");
      mobileMenu.style.display = "block";
      scrollOff();
    });
  });

  closeButton.addEventListener("click", () => {
    mobileMenu.style.display = "none";
    scrollOn();
  });
};

window.addEventListener("DOMContentLoaded", () => {
  burgerMenu("#openMenu", "#MobileMenu", "#closeMenu");
});
