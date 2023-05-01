(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  // **  Закрытие модального окна по бекдропу\\\\\\\

  refs.modal.addEventListener("click", removeModal);
  function removeModal(e) {
    if (e.farget === e.currentTarget) {
      refs.modal.classList.add("is-hidden");
      document.body.classList.remove("no-scroll");
    }
  }

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();