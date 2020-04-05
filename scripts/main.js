const scrollOff = () => {
  document.body.style.overflow = "hidden";
};

const scrollOn = () => {
  document.body.style.overflow = "";
};

const burgerMenu = (triggerSelector, menuSelector, closeSelector) => {
  const triggerButtons = document.querySelectorAll(triggerSelector),
    mobileMenu = document.querySelector(menuSelector),
    closeButton = document.querySelector(closeSelector);

  triggerButtons.forEach((item) => {
    item.addEventListener("click", () => {
      mobileMenu.style.display = "block";
      scrollOff();
    });
  });

  closeButton.addEventListener("click", () => {
    mobileMenu.style.display = "none";
    scrollOn();
  });
};

const modalWindow = (
  triggerSelector,
  modalWindowSelector,
  modalCloseSelector
) => {
  const openModal = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalWindowSelector),
    closeModal = document.querySelector(modalCloseSelector);

  openModal.forEach((item) => {
    item.addEventListener("click", (event) => {
      scrollOff();
      event.preventDefault();
      modal.classList.add("openModal");
    });
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      scrollOn();
      modal.classList.remove("openModal");
    }
  });

  closeModal.addEventListener("click", (event) => {
    scrollOn();
    event.preventDefault();
    modal.classList.remove("openModal");
  });
};

window.addEventListener("DOMContentLoaded", () => {
  burgerMenu("#openMenu", "#MobileMenu", "#closeMenu");
  modalWindow("#openModalRequest", "#ModalRequest", "#closeModalRequest");
});
