(() => {
    const refs = {
      openModalBtn: document.querySelector("#data-modal-open"),
      closeModalBtn: document.querySelector("#data-modal-close"),
      modal: document.querySelector("#data-modal"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hiden");
    }
   
  })();

  const openmodal = document.querySelector('.openmodal');
  const modalh = document.querySelector('.backdrop');
  const closemodal = document.querySelector('.closemodal');
  
  
  
  openmodal.addEventListener('click',(e)=>{
      e.preventDefault();
      modalh.classList.add('is-hidden');    
  });
  
  closemodal.addEventListener('click',(e)=>{
      e.preventDefault();
      modalh.classList.remove('is-hidden');    
  });