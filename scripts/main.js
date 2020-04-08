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

const accordion = (
  triggerSelector,
  showContentSelector,
  closeContentSelector
) => {
  const openAccordionButtons = document.querySelectorAll(triggerSelector),
    accordionContent = document.querySelectorAll(showContentSelector),
    closeAccordionButtons = document.querySelectorAll(closeContentSelector);

  openAccordionButtons.forEach((item, key) => {
    item.addEventListener("click", () => {
      accordionContent[key].classList.toggle("accordion--active");
      closeAccordionButtons[key].classList.toggle("accordion__button--active");
    });
  });
};


// TODO: Проверка на check и enable кнопки при checked
const checkbox = (checkboxSelector, buttonSelector) => {
  const allCheckbox = document.querySelectorAll(checkboxSelector),
    buttons = document.querySelectorAll(buttonSelector);

  allCheckbox.forEach((item, key) =>
    item.addEventListener("change", () => {
      alert("Чек стоит.");
    })
  );
};



window.addEventListener("DOMContentLoaded", () => {
  burgerMenu("#openMenu", "#MobileMenu", "#closeMenu");
  modalWindow("#openModalRequest", "#ModalRequest", "#closeModalRequest");
  accordion(".accordion-title", ".accordion-content", ".accordion__button");
});
