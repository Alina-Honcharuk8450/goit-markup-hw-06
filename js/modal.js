(() => {
  const refs = {
    // Посилання на кнопку відкриття модального вікна
    openModalBtn: document.querySelector("[data-modal-open]"),
    // Посилання на кнопку закриття
    closeModalBtn: document.querySelector("[data-modal-close]"),
    // Посилання на контейнер модального вікна
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    // Додаємо або прибираємо клас is-open
    refs.modal.classList.toggle("is-open");
  }
})();