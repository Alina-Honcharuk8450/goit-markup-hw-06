(() => {
  const refs = {
    // Посилання на кнопку відкриття модального вікна
    openModalBtn: document.querySelector("[data-menu-open]"),
    // Посилання на кнопку закриття
    closeModalBtn: document.querySelector("[data-menu-close]"),
    // Посилання на контейнер модального вікна
    modal: document.querySelector("[data-menu]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    // Додаємо або прибираємо клас is-open
    refs.modal.classList.toggle("is-open");
  }
})();