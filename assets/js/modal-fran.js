(() => {
    const refsF = {
      openModalBtn: document.querySelector("#data-modal-open-fran"),
      closeModalBtn: document.querySelector("#data-modal-close-fran"),
      modal: document.querySelector("#data-modal-fran"),
    };
  
    refsF.openModalBtn.addEventListener("click", toggleModal);
    refsF.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refsF.modal.classList.toggle("is-hiden");
    }
  })();