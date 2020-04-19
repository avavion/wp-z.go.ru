// Выключить скролл на странице
const scrollOff = () => {
  document.body.style.overflow = "hidden";
};

// Включить скролл на странице
const scrollOn = () => {
  document.body.style.overflow = "";
};

// TODO: Готовое бургер-меню.
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

// TODO: Готовое модальное окно
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

// TODO: Готовый аккордион
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

// TODO: Проверка на check, если он стоит то разблокировать кнопку. Иначе, кнопка остаётся заблокированной. (Изначально чек не стоит)
const checkboxChecked = (checkboxSelector, buttonSelector) => {
  const allCheckbox = document.querySelectorAll(checkboxSelector),
    buttons = document.querySelectorAll(buttonSelector);

  allCheckbox.forEach((item, key) =>
    item.addEventListener("change", () => {
      alert("Чек стоит.");
    })
  );
};

// TODO: Доработать слайдер.
const slider = (buttonNextSelector, buttonPrevSelector) => {
  const nextButtons = document.querySelectorAll(buttonNextSelector),
    prevButtons = document.querySelectorAll(buttonPrevSelector);

  nextButtons.forEach((item) => {
    item.addEventListener("click", () => {});
  });

  prevButtons.forEach((item) => {
    item.addEventListener("click", () => {});
  });
};

const fadeOut = (animationSelector, interval) => {
  const animationElement = document.querySelectorAll(animationSelector);

  animationElement.forEach((item) => {
    item.style.opacity = 1;
    let animationInterval = setInterval(() => {
      item.style.opacity = item.style.opacity - 0.05;
      if (item.style.opacity < 0.05) {
        clearInterval(animationInterval);
        item.style.display = "none";
      }
    }, interval);
  });
};

// TODO: Индикатор загрузки страницы
const preloader = (loading) => {
  let loader = document.createElement("div");
  loader.className = `preloader`;
  loader.innerHTML = `<div class="preloader__bar"></div>`;
  document.body.prepend(loader);

  if (loading) {
    scrollOff();
  } else {
    fadeOut(".preloader", 16);
    scrollOn();
  }
};

// TODO: Сделать динамическую валидацию данных форм. (Регистрация, авторизация)

preloader(true);

window.addEventListener("load", () => {
  burgerMenu("#openMenu", "#MobileMenu", "#closeMenu");
  modalWindow("#openModalRequest", "#ModalRequest", "#closeModalRequest");
  accordion(".accordion-title", ".accordion-content", ".accordion__button");
  setTimeout(() => {
    preloader(false);
  }, 500);
});
