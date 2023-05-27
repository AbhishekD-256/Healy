const formSearch = document.querySelector(".search");
const overlay = document.querySelector(".overlay");
const modalBox = document.querySelector(".modal-box");
const modelClose = document.querySelector(".js-model-btn");
const signForm = document.querySelector(".js-signup-form");
const mail = document.querySelector(".mail");
const inputArea = document.querySelector(".search input");

//form prevent
formSearch.addEventListener("submit", function (e) {
  e.preventDefault();
});
// open modal-box

signForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (document.querySelector(".input-email").value) {
    mail.textContent = document.querySelector(".input-email").value;
    document.querySelector(".input-email").value = "";
    overlay.classList.remove("hidden");
    modalBox.classList.remove("hidden");
  }
});

// close modal-box

function closeModal() {
  overlay.classList.add("hidden");
  modalBox.classList.add("hidden");
}

overlay.addEventListener("click", closeModal);
modelClose.addEventListener("click", closeModal);
